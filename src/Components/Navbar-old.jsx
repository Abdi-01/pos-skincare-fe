import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../reducers/data";

export default function App() {

    const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);

    // const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const username = useSelector((state) => state.authReducer.username); // Mengambil data dari reducer
    console.log("Data username :", username);
    const role = useSelector((state) => state.authReducer.role);
    console.log("Data role :", role);
    const location = useLocation();

    const logoutBtn = () => {
        localStorage.removeItem('skincare_login');
        dispatch(logoutAction());
    }

    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="container-fluid">

                <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i class="fas fa-bars"></i>
                </button>


                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <a class="navbar-brand mt-2 mt-lg-0" href="#">
                        SKINCARE
                    </a>

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Product</a>
                        </li>
                    </ul>

                </div>

                <div class="d-flex align-items-center">

                    <a class="text-reset me-3" href="#">
                        <i class="fas fa-shopping-cart"></i>
                    </a>

                    <div class="dropdown">
                        <a
                            class="dropdown-toggle d-flex align-items-center hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuAvatar"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                class="rounded-circle"
                                height="25"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />
                        </a>

                        {
                            username ?
                                // (role == 1 ?
                                    <ul
                                        class="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="navbarDropdownMenuAvatar"
                                    >

                                        {/* <li>
                                        <a class="dropdown-item" href="#">My profile</a>
                                    </li> */}
                                        {/* <li>
                  <a class="dropdown-item" href="#">Settings</a>
              </li> */}
                                        <li>
                                            <a class="dropdown-item" href="#">Logout</a>
                                        </li>
                                    </ul>
                                    :
                                    <ul
                                        class="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="navbarDropdownMenuAvatar"
                                    >

                                        <li>
                                            <a class="dropdown-item" href="/login">Login</a>
                                        </li>
                                    </ul>
                                // )
                               
                        }
                    </div>
                </div>

            </div>

        </nav>
    );
}