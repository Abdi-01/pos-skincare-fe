import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAction } from '../Reducers/data';


function Navbar(props) {
    const username = useSelector((state) => state.dataReducer.username);
    const role = useSelector((state) => state.dataReducer.role);
    console.log(`ini role useselector`, role);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
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

                        <a class="navbar-brand mt-2 mt-lg-0" href="/">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                height="15"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </a>

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            role == 1 ? <li class="nav-item">
                            <a class="nav-link" href="/">Dashboard</a>
                            </li>
                             : null
                                }

                        {
                            role == 1 ? <li class="nav-item">
                            <a class="nav-link" href="/product">Product</a>
                            </li>
                             : null
                                }

            
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
                                role="button"
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
                            <ul
                                class="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuAvatar"
                            >
                                {
                                username ? (
                            
                                { username}
                                
                                ) : null
            }
                                
                                
                                <li>
                                    <a class="dropdown-item" href="#">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </nav>
    )
}

export default Navbar;