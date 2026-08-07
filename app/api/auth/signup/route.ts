import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { Role } from "@prisma/client";

import { prisma } from "@/lib/db";
import { signupSchema } from "@/lib/validations/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validationResult = signupSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: validationResult.error.flatten().fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    const data = validationResult.data;

    const existingWorkspace = await prisma.workspace.findUnique({
      where: {
        slug: data.workspaceSlug,
      },
    });

    if (existingWorkspace) {
      return NextResponse.json(
        {
          message: "Workspace slug is already in use.",
        },
        {
          status: 409,
        }
      );
    }

    const passwordHash = await hash(data.password, 12);

    await prisma.$transaction(async (tx) => {
      const workspace = await tx.workspace.create({
        data: {
          name: data.workspaceName,
          slug: data.workspaceSlug,
        },
      });

      await tx.user.create({
        data: {
          name: data.name,
          email: data.email,
          passwordHash,
          role: Role.ADMIN,
          workspaceId: workspace.id,
        },
      });
    });

    return NextResponse.json(
      {
        message: "Workspace and admin user created successfully.",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}