<?php



use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Aquí es donde puedes registrar las rutas web para tu aplicación. Estas
| rutas se cargan a través del RouteServiceProvider y todas ellas se asignarán
| al grupo de middleware "web". ¡Haz algo genial!
|
*/

Route::get('/', function () {
    return view('principal');
});

Route::get('/favorites', function () {
    return view('favorites');
});

Route::get('/details', function () {
    return view('details');
});

Route::get('/aboutus', function () {
    return view('aboutus');
});

// Ruta para mostrar el formulario de inicio de sesión
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');

// Ruta para manejar el envío del formulario de inicio de sesión
Route::post('/login', [AuthController::class, 'login']);

// Ruta para cerrar sesión utilizando el AuthController
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

// Ruta para la página de inicio una vez autenticado
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Ruta para mostrar el formulario de registro
Route::get('/register', [AuthController::class, 'showRegistrationForm'])->name('register');

// Ruta para manejar el envío del formulario de registro
Route::post('/register', [AuthController::class, 'register']);