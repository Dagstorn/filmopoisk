import { RouterProvider } from 'react-router-dom';
import AppRouter from './router';
import { Provider } from 'react-redux';
import { store } from '../app/providers/store';

const App = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={AppRouter} />
        </Provider>
    );
};

export default App;