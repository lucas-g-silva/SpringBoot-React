import { Card } from "@/components/ui/card";
import { Header } from "./components/Header";
import { Contact, columns } from "./contacts/columns";
import { DataTable } from "./contacts/data-table";

async function getData(): Promise<Contact[]> {
  try {
    const response = await fetch("http://localhost:8080/contacts", {
      method: "GET", // Define o método HTTP
      headers: {
        "Content-Type": "application/json", // Define o tipo de dados esperado
      },
    });

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Converte a resposta para JSON
    const data: Contact[] = await response.json();
    return data;

  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    return []; // Retorna uma lista vazia em caso de erro
  }
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="w-full p-16">
      <Card className="p-10 flex flex-col w-full gap-5">
        <Header></Header>
        <DataTable columns={columns} data={data} />
      </Card>
    </div>
  );
}
