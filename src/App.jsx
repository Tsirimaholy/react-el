import {useForm} from "react-hook-form"
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";



const schema = yup
    .object({
        author: yup.string().required(),
        email: yup.string().email(),
        content: yup.string()
    })
    .required()

function App() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("author")} placeholder={"author"}/>
            <p>{errors.author?.message}</p>

            <input {...register("email")} type="email"/>
            <p>{errors.email?.message}</p>
            <textarea {...register("content")}/>
            <p>{errors.content?.message}</p>
            <input type="submit" value={"Publier"}/>
        </form>
    )
}

export default App
