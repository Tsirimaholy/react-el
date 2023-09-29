import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
    .object({
        author: yup.string().required(),
        email: yup.string().email(),
        content: yup.string()
    })
    .required()

function JokeForm() {
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

        <input {...register("email")} type="email" placeholder="john@mail.com"/>
        <p>{errors.email?.message}</p>
        <textarea {...register("content")} placeholder="Somer joke"/>
        <p>{errors.content?.message}</p>
        <input type="submit" value={"Publier"}/>
    </form>)
}

export default JokeForm;