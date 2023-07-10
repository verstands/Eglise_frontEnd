import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../loadingErr/Loading";

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const url = "http://localhost:5001/api/";
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);

    const handleConnecter = (e) => {
        e.preventDefault();
         axios.post(`${url}login`,
            {
                email: email,
                password: password
            }
        ).then((response) => {
            let token = JSON.stringify(response.data.token);
            let tokenT = token.substring(1, token.length - 1);
            localStorage.setItem("token", tokenT)
            navigate('/dashboad')
            window.location.reload();
        }).catch((error) => {
            if (error.response.status === 401) {
                Swal.fire({
                    icon: 'error',
                    text: `${error.response.data.message}`,
                    confirmButtonText: 'OK'
                })
                setloading(false)
            } else if (error.response.status === 500) {
                Swal.fire({
                    icon: 'error',
                    text: 'Erreur de la connexion !!!',
                    confirmButtonText: 'OK'
                })
                setloading(false)
            } else if (error.response.status === 404) {
                Swal.fire({
                    icon: 'info',
                    title: 'Service non trouvée !!!',
                    text: '',
                })
                setloading(false)
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'Service non trouvée !!!',
                    text: 'Service non trouvée !!!',
                })
                setloading(false)
            }
        })
    }
    return (
        <div>
            <main className="d-flex w-100">
                <div className="container d-flex flex-column">
                    <div className="row vh-100">
                        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                            <div className="d-table-cell align-middle">
                                <div className="text-center mt-4">
                                    <h1 className="h2">Bienvenue...</h1>
                                    <p className="lead">
                                        Sign in to your account to continue
                                    </p>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="m-sm-4">
                                            <div className="text-center">
                                                <img src="img/avatars/avatar.jpg" alt="Charles Hall" className="img-fluid rounded-circle" width="132" height="132" />
                                            </div>
                                            <form action="" onSubmit={handleConnecter}>
                                                <div className="mb-3">
                                                    <label className="form-label">Email</label>
                                                    <input
                                                        className="form-control form-control-lg"
                                                        type="email"
                                                        name="email"
                                                        onChange={(e) => setemail(e.target.value)} />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Password</label>
                                                    <input
                                                        className="form-control form-control-lg"
                                                        type="password"
                                                        name="password"
                                                        onChange={(e) => setpassword(e.target.value)} />
                                                    <small>
                                                        <a href="index.html">Mot de passe  oublié?</a>
                                                    </small>
                                                </div>
                                                <div>
                                                    <label className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="remember-me" name="remember-me" checked />
                                                        <span className="form-check-label">
                                                            Remember me next time
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="text-center mt-3">
                                                    <button type="submit" className="btn btn-lg btn-primary">
                                                        {
                                                            loading === true && (
                                                               <Loading />
                                                            )
                                                        }
                                                        Se  connecter
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Login;