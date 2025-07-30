import { PrismaClient } from "@prisma/client";
import JsonViewer from "@/components/json-viewer";

export const dynamic = "force-dynamic";

export default async function SharedJson({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const prisma = new PrismaClient();
  const jsonData = await prisma.jsonData.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      content: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  await prisma.$disconnect();
  if (!jsonData) {
    return <div className="mt-8">Erreur lors du chargement des données.</div>;
  }
  return (
    <div className="mt-8 space-y-4">
      <h1 className="text-2xl underline font-bold">{jsonData.name}</h1>
      <JsonViewer content={jsonData.content} />
    </div>
  );
}
