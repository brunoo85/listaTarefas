import React from 'react';
import { useForm } from 'react-hook-form';

const TodoForm = ({ addTodo }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      text: '',
      prior: '',
    }
  });

  const onSubmit = (data) => {
    addTodo(data.text, data.prior);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Adicione uma tarefa"
        {...register("text", { required: "Título é necessário" })}
        aria-invalid={errors.text ? "true" : "false"}
      />
      {errors.text && <p role="alert">{errors.text.message}</p>}

      <select 
        {...register("prior", { required: "Prioridade é necessária" })}
        aria-invalid={errors.prior ? "true" : "false"}
      >
        <option disabled value="" >Selecione a prioridade</option>
        <option value="Urgente">Urgente</option>
        <option value="Alta">Alta</option>
        <option value="Média">Média</option>
        <option value="Baixa">Baixa</option>
      </select>
      {errors.prior && <p role="alert">{errors.prior.message}</p>}

      <input  className='inputButton' type="submit" value="Adicionar Tarefa"/>
    </form>
  );
};

export default TodoForm;