/*
SUMMARY: Zod = schema (the rules). React Hook Form = input wiring. zodResolver connects them with fewer re-renders.
*/
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Notes from '../Notes'

const schema = z.object({
  email: z.string().email(),
  age: z.coerce.number().min(18, '18+'),
})

export default function Lesson18() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) })
  return (
    <>
      <Notes
        def="React Hook Form manages form register/submit with minimal re-renders. Zod describes the shape. zodResolver runs parse() and maps issues into RHF errors."
        pic="RHF is the desk clerk; Zod is the rulebook they check."
        hook="Schema defines truth; RHF wires inputs."
        ideas={['{...register("email")} connects the input. handleSubmit(fn) only calls fn if valid.', 'z.coerce.number() turns string input into a number before min(18).', 'errors.email.message is what you show.']}
        sum="Write the schema once. register fields. handleSubmit gets typed, valid data. Don’t hand-roll this for serious forms."
        tryThis={['Add password with .min(8)', 'defaultValues: { age: 18 }', 'watch("email") for a live preview']}
        quiz="Q: What does zodResolver do? A: Parses with Zod and maps failures into RHF’s errors object."
      />
      <div className="demo">
        <h2>React Hook Form + Zod</h2>
        <form className="stack" onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
          <input placeholder="email" {...register('email')} />
          {errors.email && <span className="err">{errors.email.message}</span>}
          <input placeholder="age" {...register('age')} />
          {errors.age && <span className="err">{errors.age.message}</span>}
          <button type="submit">save</button>
        </form>
      </div>
    </>
  )
}
