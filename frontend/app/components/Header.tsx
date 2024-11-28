import { PersonStanding, Plus, User, User2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";

export function Header() {
    return (
        <header className="flex w-full justify-between">
            <div className="flex gap-2">
                <User2Icon className="size-8"></User2Icon>
                <h1 className="text-3xl font-bold">Contatos</h1>
            </div>
            <div className="flex gap-2">
                <Button><Plus></Plus>Novo</Button>
                <ModeToggle></ModeToggle>
            </div>
        </header>
    );
}