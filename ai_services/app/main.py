import os

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from groq import Groq

from app.schemas.classification import (
    ClassificationRequest,
    ClassificationResponse,
)
from app.services.classification_service import (
    ClassificationService,
)
from app.schemas.embedding import (
    EmbeddingRequest,
    EmbeddingResponse,
)
from app.services.embedding_service import embedding_service


load_dotenv()


app = FastAPI(
    title="LOOP AI Service",
    description="AI service for LOOP Voice-of-Customer platform",
    version="1.0.0",
)


api_key = os.getenv("GROQ_API_KEY")

if not api_key:
    raise RuntimeError(
        "GROQ_API_KEY is missing from .env"
    )


groq_client = Groq(
    api_key=api_key.strip()
)


classification_service = ClassificationService(
    client=groq_client,
    model="llama-3.3-70b-versatile",
)


@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "service": "loop-ai",
    }


@app.post(
    "/api/ai/classify",
    response_model=ClassificationResponse,
)
def classify_feedback(
    request: ClassificationRequest,
):
    try:
        result = classification_service.classify(
            request.feedback
        )

        return result

    except Exception as error:
        print(f"Classification error: {error}")

        raise HTTPException(
            status_code=500,
            detail="AI classification failed.",
        )


@app.post(
    "/api/ai/embed",
    response_model=EmbeddingResponse,
)
def generate_embedding(
    request: EmbeddingRequest,
):
    try:
        embedding = embedding_service.generate_embedding(
            request.text
        )

        return EmbeddingResponse(
            embedding=embedding,
            model="all-MiniLM-L6-v2",
            dimensions=len(embedding),
        )

    except ValueError as error:
        raise HTTPException(
            status_code=400,
            detail=str(error),
        )

    except Exception as error:
        print(f"Embedding error: {error}")

        raise HTTPException(
            status_code=500,
            detail="Embedding generation failed.",
        )