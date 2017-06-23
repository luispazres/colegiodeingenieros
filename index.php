<?php

    session_start();

    require_once("libs/utilities.php");

    $pageRequest = "login";

    if(isset($_GET["page"])){
        $pageRequest = $_GET["page"];
    }

    //Incorporando los midlewares son codigos que se deben ejecutar
    //Siempre
    require_once("controllers/verificar.mw.php");
    require_once("controllers/site.mw.php");
    //Este switch se encarga de todo el enrutamiento

    switch($pageRequest){
        case "home":
            //llamar al controlador
            require_once("controllers/home.control.php");
            break;

        case "revisarSolicitudAprobacionEnee":
            //llamar al controlador
            require_once("controllers/revisarSolicitudAprobacionEnee.control.php");
            break;

        case "revisarSolicitudFactibilidadEnee":
            //llamar al controlador
            require_once("controllers/revisarSolicitudFactibilidadEnee.control.php");
            break;
        case "cerrarSesion":
            //llamar al controlador
            require_once("controllers/cerrarSesion.control.php");
            break;

        case "login":
            //llamar al controlador
            require_once("controllers/login.control.php");
            break;

        case "transicionAprobacion":
            //llamar al controlador
            require_once("controllers/transicionAprobacion.control.php");
            break;

        case "verMisDocumentosDeAprobacion":
            //llamar al controlador
            require_once("controllers/verMisDocumentosDeAprobacion.control.php");
            break;

        case "verMisSolicitudesDeDespeje":
            //llamar al controlador
            require_once("controllers/verMisSolicitudesDeDespeje.control.php");
            break;

        case "revisarSolicitudAprobacionCimeqh":
                //llamar al controlador
                require_once("controllers/revisarSolicitudAprobacionCimeqh.control.php");
                break;


        case "verMisSolicitudesDeAprobacion":
            //llamar al controlador
            require_once("controllers/verMisSolicitudesDeAprobacion.control.php");
            break;

        case "verMisSolicitudesDeRecepcion":
            //llamar al controlador
            require_once("controllers/verMisSolicitudesDeRecepcion.control.php");
            break;

            case "documentos":
                //llamar al controlador
                require_once("controllers/documentos.control.php");
                break;

        case "verMisSolicitudesDeFactibilidad":
            //llamar al controlador
            require_once("controllers/verMisSolicitudesDeFactibilidad.control.php");
            break;

        case "transicionFactibilidad":
            //llamar al controlador
            require_once("controllers/transicionFactibilidad.control.php");
            break;

        case "verProyectos":
            //llamar al controlador
            require_once("controllers/verProyectos.control.php");
            break;

            case "solicitudDeCuentas":
                //llamar al controlador
                require_once("controllers/solicitudDeCuentas.control.php");
                break;

        case "registroProyectos":
            //llamar al controlador
            require_once("controllers/registroProyectos.control.php");
            break;
      case "factibilidadProyectos":
            //llamar al controlador
            require_once("controllers/factibilidadProyectos.control.php");
            break;

      case "recepcionProyectos":
            //llamar al controlador
            require_once("controllers/recepcionProyectos.control.php");
            break;

        case "registroUsuarios":
            //llamar al controlador
            require_once("controllers/registroUsuarios.control.php");
            break;

        case "aprobacionProyectos":
            //llamar al controlador
            require_once("controllers/aprobacionProyectos.control.php");
            break;

            case "solicitudDespeje":
                //llamar al controlador
                require_once("controllers/solicitudDespeje.control.php");
                break;

        case "productos":
            //llamar al controlador
            require_once("controllers/productos.control.php");
            break;

            case "verUsuarios":
                //llamar al controlador
                require_once("controllers/verUsuarios.control.php");
                break;

                case "modificarUsuario":
                    //llamar al controlador
                    require_once("controllers/modificarUsuario.control.php");
                    break;


                    case "revisarSolicitudFactibilidadCimeqh":
                        //llamar al controlador
                    require_once("controllers/revisarSolicitudFactibilidadCimeqh.control.php");
                    break;

                    case "revisarSolicitudRecepcionCimeqh":
                        //llamar al controlador
                    require_once("controllers/revisarSolicitudRecepcionCimeqh.control.php");
                    break;

                    case "comentarios":
                        //llamar al controlador
                    require_once("controllers/comentarios.control.php");
                    break;


        /*case "login":
=======
        case "menu":
            require_once("controllers/menu.control.php");
            break;
        case "login":
>>>>>>> negocios
            require_once("controllers/login.control.php");
            break;
        case "registro":
            require_once("controllers/registro.control.php");
            break;
<<<<<<< HEAD
        //para agregar una nueva pagina
        // agregar otro case
        case "categorias":
            require_once("controllers/categorias.control.php");
            break;
        case "category":
            require_once("controllers/category.control.php");
=======
        case "althome":
            require_once("controllers/althome.control.php");
>>>>>>> negocios
            break;
        //Mantenimiento de Unidades
        case "unidades":
            require_once("controllers/mnt/unidades.control.php");
            break;
        case "unidad":
                require_once("controllers/mnt/unidad.control.php");
                break;
        //Mantenimiento de Unidades
        case "empresas":
            require_once("controllers/mnt/empresas.control.php");
            break;
        case "empresa":
            require_once("controllers/mnt/empresa.control.php");
            break;*/
        default:
            require_once("controllers/error.control.php");

    }
?>
