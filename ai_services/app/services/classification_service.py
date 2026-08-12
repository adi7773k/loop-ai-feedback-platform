from groq import Groq

from app.schemas.classification import (
    ClassificationResponse,
)
from app.prompts.classification import (
    CLASSIFICATION_SYSTEM_PROMPT,
    build_classification_prompt,
)


class ClassificationService:

    def __init__(self, client: Groq, model: str):
        self.client = client
        self.model = model

    def classify(
        self,
        feedback: str,
    ) -> ClassificationResponse:

        response = self.client.chat.completions.create(
            model=self.model,
            temperature=0,
            response_format={
                "type": "json_object"
            },
            messages=[
                {
                    "role": "system",
                    "content": CLASSIFICATION_SYSTEM_PROMPT,
                },
                {
                    "role": "user",
                    "content": build_classification_prompt(
                        feedback
                    ),
                },
            ],
        )

        content = response.choices[0].message.content

        if not content:
            raise ValueError(
                "Groq returned an empty response."
            )

        return ClassificationResponse.model_validate_json(
            content
        )