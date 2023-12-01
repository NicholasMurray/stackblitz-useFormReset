import React from 'react';
import './style.css';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const [selected, setSelected] = useState('dor');

  setTimeout(() => {
    setSelected('alon');
  }, 2000);

  const form = useForm({
    defaultValues: {
      hello: 'world',
    },
    mode: 'onChange',
  });
  const { reset, register } = form;

  useEffect(() => {
    let defaultValues = {};
    defaultValues.hello = selected;
    reset({ ...defaultValues });
  }, [selected]);

  return (
    <form>
      <label>
        <div>
          <input type="radio" value="dor" {...register('hello')} />
          dor
        </div>
      </label>
      <label>
        <div>
          <input type="radio" value="world" {...register('hello')} />
          world
        </div>
      </label>
      <label>
        <div>
          <input type="radio" value="alon" {...register('hello')} />
          alon
        </div>
      </label>
      <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
    </form>
  );
}
