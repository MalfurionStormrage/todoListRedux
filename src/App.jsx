import React , { Suspense , useState , useEffect } from 'react';
import Spinner from './components/Spinner';

const LabelInput = React.lazy(() => import('./components/LabelInput'));
const ButtonCustom = React.lazy(() => import('./components/ButtonCustom'));
const TextareaCustom = React.lazy(() => import('./components/TextareaCustom'));

import { Provider } from "react-redux";
import { todoListRedux } from './store/todoListRedux'; 
import { agregarTarea , resetearTareas  } from './store/todoListAction';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {

	const [error , setError ] = useState(false);
	const [listTareas , setListTareas] = useState([]);

	todoListRedux.store.subscribe(() => {
		const { tareas } = todoListRedux.store.getState();
		setListTareas(tareas);
	});

	/* cargar los datos del persist al inicio */
	useEffect(() => {
		const { tareas } = todoListRedux.store.getState();
		setListTareas(tareas);
	});

	/* agregar nueva tarea */
	const handleAgregar = (e) => {
		e.preventDefault();

		if(document.getElementById('title').value === "" || document.getElementById('descriocion').value === "") {
			setError(true);
			setTimeout(() => setError(false),3000);
			return 
		}

		const datos = {
			id: Date.now(),
			title: document.getElementById('title').value,
			descriocion: document.getElementById('descriocion').value,
			completado:false
		}

		todoListRedux.store.dispatch(agregarTarea(datos));

		document.getElementById('title').value = "";
		document.getElementById('descriocion').value = "";
	}

	return (

		<Provider store={todoListRedux.store}>
			<PersistGate loading={null} persistor={todoListRedux.persistStoree}>
				<Suspense fallback={<Spinner />}>
					<div className="form-control p-4 background" style={{ minHeight: "100vh" }}>
						<section className="bg-white rounded p-4 my-4">
							<div className="text-center fw-bold">
								<h2>Control de tareas</h2>
							</div>
							<form>
								<LabelInput type="text" id="title" clases="border-primary" title="Titulo de la tarea" placeholder="Escribir titulo de la nueva tarea"/>
								<TextareaCustom id="descriocion" title="Descripcion de la tarea" placeholder="Escribre una Descripcion de la tarea" clases="border-primary"/>
								<div className="my-3">
									{
										error ? <div className="alert alert-danger border border-danger text-center p-2">Todo los campos son obligatorios.</div> : null
									}
								</div>
								<div className="my-3">
									<div className="row">
										<div className="col-sm">
											<ButtonCustom type="reset" title="Agregar nueva tarea" clases="btn-outline-success" onClick={handleAgregar} />
										</div>
										<div className="col-sm">
											<ButtonCustom title="Borrar todas las tareas" clases="btn-outline-danger" onClick={(e) => {e.preventDefault(); todoListRedux.store.dispatch(resetearTareas)}}/>
										</div>
									</div>
								</div>
							</form>
						</section>
						<section className="bg-white rounded p-4 my-4" id="contenedor">

								{
									listTareas?.map((item) => (
										<div className="list-group-contenedor list-group-contenedor-action shadow mb-2 rounded p-3 border border-secondary" key={item.id}>
								 		    <div className="d-flex w-100 justify-content-between">
								 		      <h5 className="mb-1">{item.title}</h5>
								 		    </div>
								 		    <p className="mb-1">{item.descriocion}</p>
								 		</div>
								))}

								{
									listTareas.length === 0 ? <div className="text-center w-100 border border-secondary p-2 rounded shadow-lg"> no hay registros</div> : ""
								}
						</section>
					</div>
				</Suspense>
			</PersistGate>
		</Provider>
	)
}
