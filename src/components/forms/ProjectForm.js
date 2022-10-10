import Input from './Input'
import SubmitButton from './SubmitButton'

export default function ProjectForm({btnText}) {
    return (
        <form className={StyleSheet.form}>
            <Input
            type="text"
            text="Nome do projeto"
            name="name"
            placeholder="Insira o nome do projeto"
            />

            <Input
            type="text"
            text="Linguagem usada"
            name="name"
            placeholder="Defina a linguagem"
            />

            <Input
            type="text"
            text="Progresso"
            name="name"
            placeholder="Defina o progresso"
            />

            <Input
            type="text"
            text="Data de inicio"
            name="name"
            placeholder="Data de inicialização"
            />

            <SubmitButton text={btnText}/>
        </form>
    )
}