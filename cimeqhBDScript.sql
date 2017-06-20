-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cimeqh
-- ------------------------------------------------------
-- Server version	5.7.14

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tblconexiones`
--

DROP TABLE IF EXISTS `tblconexiones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblconexiones` (
  `conexionId` int(11) NOT NULL AUTO_INCREMENT,
  `conexionDescripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`conexionId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblconexiones`
--

LOCK TABLES `tblconexiones` WRITE;
/*!40000 ALTER TABLE `tblconexiones` DISABLE KEYS */;
INSERT INTO `tblconexiones` VALUES (1,'Monofásico'),(2,'Trifásico');
/*!40000 ALTER TABLE `tblconexiones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbldepartamentos`
--

DROP TABLE IF EXISTS `tbldepartamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbldepartamentos` (
  `departamentoId` int(11) NOT NULL,
  `departamentoDescripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`departamentoId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbldepartamentos`
--

LOCK TABLES `tbldepartamentos` WRITE;
/*!40000 ALTER TABLE `tbldepartamentos` DISABLE KEYS */;
INSERT INTO `tbldepartamentos` VALUES (1,'Francisco Morazan'),(2,'Islas de la Bahia'),(3,'Comayagua'),(4,'Santa Barbara'),(5,'Gracias a Dios'),(6,'Lempira'),(7,'Valle'),(8,'Atlantida'),(9,'Cortes');
/*!40000 ALTER TABLE `tbldepartamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbldocumentosaprobacion`
--

DROP TABLE IF EXISTS `tbldocumentosaprobacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbldocumentosaprobacion` (
  `documentosAprobacionId` int(11) NOT NULL AUTO_INCREMENT,
  `documentoDireccion` varchar(600) NOT NULL,
  `solicitudAprobacionId` int(11) NOT NULL,
  PRIMARY KEY (`documentosAprobacionId`),
  KEY `solicitudAprobacionId_idx` (`solicitudAprobacionId`),
  KEY `fksolicitudAprobacionId_idx` (`solicitudAprobacionId`),
  CONSTRAINT `fksolicitudAprobacionId` FOREIGN KEY (`solicitudAprobacionId`) REFERENCES `tblsolicitudaprobacion` (`solicitudAprobacionId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbldocumentosaprobacion`
--

LOCK TABLES `tbldocumentosaprobacion` WRITE;
/*!40000 ALTER TABLE `tbldocumentosaprobacion` DISABLE KEYS */;
INSERT INTO `tbldocumentosaprobacion` VALUES (39,'files/put_tris.pdf',79),(40,'files/PROYECTO DIGITALIZACION APROBACION DE PLANOS EN ENEE.pdf',79),(45,'files/PROYECTO DIGITALIZACION APROBACION DE PLANOS EN ENEE.pdf',82),(46,'files/PROYECTO DIGITALIZACION APROBACION DE PLANOS EN ENEE.pdf',83);
/*!40000 ALTER TABLE `tbldocumentosaprobacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbldocumentosrecepcion`
--

DROP TABLE IF EXISTS `tbldocumentosrecepcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbldocumentosrecepcion` (
  `documentoRecepcionId` int(11) NOT NULL AUTO_INCREMENT,
  `documentoRecepcionDireccion` varchar(600) NOT NULL,
  `solicitudRecepcionId` int(11) NOT NULL,
  PRIMARY KEY (`documentoRecepcionId`),
  KEY `solicitudRecepcionId_idx` (`solicitudRecepcionId`),
  CONSTRAINT `solicitudRecepcionId` FOREIGN KEY (`solicitudRecepcionId`) REFERENCES `tblsolicitudrecepcion` (`solicitudRecepcioId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbldocumentosrecepcion`
--

LOCK TABLES `tbldocumentosrecepcion` WRITE;
/*!40000 ALTER TABLE `tbldocumentosrecepcion` DISABLE KEYS */;
INSERT INTO `tbldocumentosrecepcion` VALUES (1,'files/PROYECTO DIGITALIZACION APROBACION DE PLANOS EN ENEE.pdf',1),(2,'files/put_tris.pdf',1);
/*!40000 ALTER TABLE `tbldocumentosrecepcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblestadoaprobacion`
--

DROP TABLE IF EXISTS `tblestadoaprobacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblestadoaprobacion` (
  `estadoAprobacionId` int(11) NOT NULL AUTO_INCREMENT,
  `estadoAprobacionDescripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`estadoAprobacionId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblestadoaprobacion`
--

LOCK TABLES `tblestadoaprobacion` WRITE;
/*!40000 ALTER TABLE `tblestadoaprobacion` DISABLE KEYS */;
INSERT INTO `tblestadoaprobacion` VALUES (1,'Aprobado'),(2,'Aprobado Con Observciones'),(3,'Rechazado'),(4,'En Revision');
/*!40000 ALTER TABLE `tblestadoaprobacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblestadocuenta`
--

DROP TABLE IF EXISTS `tblestadocuenta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblestadocuenta` (
  `estadoCuentaId` int(11) NOT NULL AUTO_INCREMENT,
  `estadoCuentaDescripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`estadoCuentaId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblestadocuenta`
--

LOCK TABLES `tblestadocuenta` WRITE;
/*!40000 ALTER TABLE `tblestadocuenta` DISABLE KEYS */;
INSERT INTO `tblestadocuenta` VALUES (1,'aprobado'),(2,'denegado'),(3,'suspendido'),(4,'En Revision');
/*!40000 ALTER TABLE `tblestadocuenta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblestadodespeje`
--

DROP TABLE IF EXISTS `tblestadodespeje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblestadodespeje` (
  `estadoDespejeId` int(11) NOT NULL AUTO_INCREMENT,
  `estadoDespejeDescripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`estadoDespejeId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblestadodespeje`
--

LOCK TABLES `tblestadodespeje` WRITE;
/*!40000 ALTER TABLE `tblestadodespeje` DISABLE KEYS */;
INSERT INTO `tblestadodespeje` VALUES (1,'Aprobado'),(2,'Rechazado'),(3,'Pospuesto'),(4,'En Revisión');
/*!40000 ALTER TABLE `tblestadodespeje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblestadofactibilidad`
--

DROP TABLE IF EXISTS `tblestadofactibilidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblestadofactibilidad` (
  `estadoFactibilidadId` int(11) NOT NULL AUTO_INCREMENT,
  `estadoFactibilidadDescripcion` varchar(120) NOT NULL,
  PRIMARY KEY (`estadoFactibilidadId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblestadofactibilidad`
--

LOCK TABLES `tblestadofactibilidad` WRITE;
/*!40000 ALTER TABLE `tblestadofactibilidad` DISABLE KEYS */;
INSERT INTO `tblestadofactibilidad` VALUES (1,'Rechazado'),(2,'Aprobado'),(3,'Aprobado con Observaciones'),(4,'En Revision');
/*!40000 ALTER TABLE `tblestadofactibilidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblestadorecepcion`
--

DROP TABLE IF EXISTS `tblestadorecepcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblestadorecepcion` (
  `estadoRecepcionId` int(11) NOT NULL AUTO_INCREMENT,
  `estadoRecepcionDescripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`estadoRecepcionId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblestadorecepcion`
--

LOCK TABLES `tblestadorecepcion` WRITE;
/*!40000 ALTER TABLE `tblestadorecepcion` DISABLE KEYS */;
INSERT INTO `tblestadorecepcion` VALUES (1,'Pendiente'),(2,'Proyecto Recibido');
/*!40000 ALTER TABLE `tblestadorecepcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblproyectos`
--

DROP TABLE IF EXISTS `tblproyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblproyectos` (
  `proyectoId` int(11) NOT NULL AUTO_INCREMENT,
  `proyectoNombrePropietario` varchar(100) CHARACTER SET latin1 NOT NULL,
  `proyectoIdentidadPropietario` varchar(30) CHARACTER SET latin1 NOT NULL,
  `proyectoCelularPropietario` varchar(45) CHARACTER SET latin1 NOT NULL,
  `proyectoEmailPropietario` varchar(100) CHARACTER SET latin1 NOT NULL,
  `proyectoDireccionPropietario` varchar(100) CHARACTER SET latin1 NOT NULL,
  `proyectoTelefonoPropietario` varchar(45) CHARACTER SET latin1 NOT NULL,
  `departamentoId` int(11) NOT NULL,
  `proyectoDescrpcion` varchar(100) CHARACTER SET latin1 NOT NULL,
  `proyectoLatitud` float NOT NULL,
  `proyectoLongitud` float NOT NULL,
  `proyectoDireccion` varchar(200) CHARACTER SET latin1 NOT NULL,
  `usuarioIdentidad` varchar(25) CHARACTER SET latin1 NOT NULL,
  `proyectoNombre` varchar(200) CHARACTER SET latin1 NOT NULL,
  `tipoId` int(11) NOT NULL,
  PRIMARY KEY (`proyectoId`),
  KEY `usuarioIdentidad_idx` (`usuarioIdentidad`),
  KEY `departamentoId_idx` (`departamentoId`),
  KEY `tipoProyectoId_idx` (`tipoId`),
  CONSTRAINT `departamentoId` FOREIGN KEY (`departamentoId`) REFERENCES `tbldepartamentos` (`departamentoId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tipoId` FOREIGN KEY (`tipoId`) REFERENCES `tbltipoproyectos` (`tipoId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `usuarioIdentidad` FOREIGN KEY (`usuarioIdentidad`) REFERENCES `tblusuarios` (`usuarioIdentidad`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblproyectos`
--

LOCK TABLES `tblproyectos` WRITE;
/*!40000 ALTER TABLE `tblproyectos` DISABLE KEYS */;
INSERT INTO `tblproyectos` VALUES (5,'Luis Reyes','0801199503314','22308090','luis@hotmail.com','Res. Plaza','96425292',9,'Ingenieros',46,90,'CircunvalaciÃ³n','0801199503314','CIMEQH',5),(6,'Eduardo Reyes','0801199503315','96425295','paz@hotmail.com','Portal del Bosque','22308095',5,'Energia',45,66,'LA mosquiitia','0801199503314','EEH',6);
/*!40000 ALTER TABLE `tblproyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblroles`
--

DROP TABLE IF EXISTS `tblroles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblroles` (
  `rolId` int(11) NOT NULL AUTO_INCREMENT,
  `rolDescripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`rolId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblroles`
--

LOCK TABLES `tblroles` WRITE;
/*!40000 ALTER TABLE `tblroles` DISABLE KEYS */;
INSERT INTO `tblroles` VALUES (1,'cimeqh'),(2,'enee'),(3,'publico');
/*!40000 ALTER TABLE `tblroles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblsolicitudaprobacion`
--

DROP TABLE IF EXISTS `tblsolicitudaprobacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblsolicitudaprobacion` (
  `solicitudAprobacionId` int(11) NOT NULL AUTO_INCREMENT,
  `solicitudAaprobacionMontoEstimado` float NOT NULL,
  `solicitudAprobacionCosto` float NOT NULL,
  `estadoSolicitudAprobacion` int(11) NOT NULL,
  `proyectoId` int(11) NOT NULL,
  `codigoAprobacion` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`solicitudAprobacionId`),
  KEY `fkProyectoId_idx` (`proyectoId`),
  KEY `estadoAprobacion_idx` (`estadoSolicitudAprobacion`),
  CONSTRAINT `estadoAprobacionId` FOREIGN KEY (`estadoSolicitudAprobacion`) REFERENCES `tblestadoaprobacion` (`estadoAprobacionId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fkProyectoId` FOREIGN KEY (`proyectoId`) REFERENCES `tblproyectos` (`proyectoId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblsolicitudaprobacion`
--

LOCK TABLES `tblsolicitudaprobacion` WRITE;
/*!40000 ALTER TABLE `tblsolicitudaprobacion` DISABLE KEYS */;
INSERT INTO `tblsolicitudaprobacion` VALUES (79,87000,50,4,5,'a82dhxaq12ort6ki27'),(82,54545,50,4,5,'a82dhxaq6orut6i2a'),(83,54545,50,4,5,'a82dhxaqlorut6w2b');
/*!40000 ALTER TABLE `tblsolicitudaprobacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblsolicituddespeje`
--

DROP TABLE IF EXISTS `tblsolicituddespeje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblsolicituddespeje` (
  `solicitudDespejeId` int(11) NOT NULL AUTO_INCREMENT,
  `solicitudDespejeHoras` float NOT NULL,
  `solicitudDespejeCuadrillas` int(11) NOT NULL,
  `solicitudDespejeCantidadPersonal` int(11) NOT NULL,
  `solicitudDespejeFecha` datetime NOT NULL,
  `solicitudDespejeCosto` float DEFAULT NULL,
  `tblsolicitudaprobacion_solicitudAprobacionId` int(11) NOT NULL,
  `estadoDespejeId` int(11) NOT NULL,
  PRIMARY KEY (`solicitudDespejeId`),
  KEY `fk_tblsolicituddespeje_tblsolicitudaprobacion1_idx` (`tblsolicitudaprobacion_solicitudAprobacionId`),
  KEY `estadoId_idx` (`estadoDespejeId`),
  CONSTRAINT `estadoId` FOREIGN KEY (`estadoDespejeId`) REFERENCES `tblestadodespeje` (`estadoDespejeId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_tblsolicituddespeje_tblsolicitudaprobacion1` FOREIGN KEY (`tblsolicitudaprobacion_solicitudAprobacionId`) REFERENCES `tblsolicitudaprobacion` (`solicitudAprobacionId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblsolicituddespeje`
--

LOCK TABLES `tblsolicituddespeje` WRITE;
/*!40000 ALTER TABLE `tblsolicituddespeje` DISABLE KEYS */;
INSERT INTO `tblsolicituddespeje` VALUES (2,2,55,45,'2017-06-17 00:00:00',NULL,79,4);
/*!40000 ALTER TABLE `tblsolicituddespeje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblsolicitudfactibilidad`
--

DROP TABLE IF EXISTS `tblsolicitudfactibilidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblsolicitudfactibilidad` (
  `solicitudFactibilidadId` int(11) NOT NULL AUTO_INCREMENT,
  `voltajeId` int(11) NOT NULL,
  `conexionId` int(11) NOT NULL,
  `solicitudFactibilidadPotencia` float NOT NULL,
  `solicitudadFactibilidadCrecimientoEsperado` float NOT NULL,
  `solicitudFactibilidadKva` float NOT NULL,
  `estadoFactibilidadId` int(11) NOT NULL,
  `proyectoId` int(11) NOT NULL,
  `comentario` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`solicitudFactibilidadId`),
  KEY `proyectoId_idx` (`proyectoId`),
  KEY `voltajeId_idx` (`voltajeId`),
  KEY `conexionID_idx` (`conexionId`),
  KEY `estadoFactibilidadId_idx` (`estadoFactibilidadId`),
  CONSTRAINT `conexionID` FOREIGN KEY (`conexionId`) REFERENCES `tblconexiones` (`conexionId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `estadoFactibilidadId` FOREIGN KEY (`estadoFactibilidadId`) REFERENCES `tblestadofactibilidad` (`estadoFactibilidadId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `proyectoId` FOREIGN KEY (`proyectoId`) REFERENCES `tblproyectos` (`proyectoId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `voltajeId` FOREIGN KEY (`voltajeId`) REFERENCES `tblvoltajes` (`voltajeId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblsolicitudfactibilidad`
--

LOCK TABLES `tblsolicitudfactibilidad` WRITE;
/*!40000 ALTER TABLE `tblsolicitudfactibilidad` DISABLE KEYS */;
INSERT INTO `tblsolicitudfactibilidad` VALUES (6,2,2,45,90,100,4,6,NULL);
/*!40000 ALTER TABLE `tblsolicitudfactibilidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblsolicitudrecepcion`
--

DROP TABLE IF EXISTS `tblsolicitudrecepcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblsolicitudrecepcion` (
  `solicitudRecepcioId` int(11) NOT NULL AUTO_INCREMENT,
  `solicitudRecepcioEstado` int(11) NOT NULL,
  `solicitudAprobacionId` int(11) NOT NULL,
  PRIMARY KEY (`solicitudRecepcioId`),
  KEY `fk_tblSolicitudRecpcion_tblsolicitudaprobacion1_idx` (`solicitudAprobacionId`),
  KEY `estadoRecepcionId_idx` (`solicitudRecepcioEstado`),
  CONSTRAINT `estadoRecepcionId` FOREIGN KEY (`solicitudRecepcioEstado`) REFERENCES `tblestadorecepcion` (`estadoRecepcionId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_tblSolicitudRecpcion_tblsolicitudaprobacion1` FOREIGN KEY (`solicitudAprobacionId`) REFERENCES `tblsolicitudaprobacion` (`solicitudAprobacionId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblsolicitudrecepcion`
--

LOCK TABLES `tblsolicitudrecepcion` WRITE;
/*!40000 ALTER TABLE `tblsolicitudrecepcion` DISABLE KEYS */;
INSERT INTO `tblsolicitudrecepcion` VALUES (1,1,79);
/*!40000 ALTER TABLE `tblsolicitudrecepcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbltimbres`
--

DROP TABLE IF EXISTS `tbltimbres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbltimbres` (
  `timbreId` int(11) NOT NULL AUTO_INCREMENT,
  `solicitudAprobacionId` int(11) NOT NULL,
  PRIMARY KEY (`timbreId`),
  KEY `solicitudAprobacionId_idx` (`solicitudAprobacionId`),
  CONSTRAINT `solicitudAprobacionId` FOREIGN KEY (`solicitudAprobacionId`) REFERENCES `tblsolicitudaprobacion` (`solicitudAprobacionId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbltimbres`
--

LOCK TABLES `tbltimbres` WRITE;
/*!40000 ALTER TABLE `tbltimbres` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbltimbres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbltipoproyectos`
--

DROP TABLE IF EXISTS `tbltipoproyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbltipoproyectos` (
  `tipoId` int(11) NOT NULL AUTO_INCREMENT,
  `tipoDescrpcion` varchar(200) NOT NULL,
  PRIMARY KEY (`tipoId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbltipoproyectos`
--

LOCK TABLES `tbltipoproyectos` WRITE;
/*!40000 ALTER TABLE `tbltipoproyectos` DISABLE KEYS */;
INSERT INTO `tbltipoproyectos` VALUES (5,'Particular'),(6,'Urbanización');
/*!40000 ALTER TABLE `tbltipoproyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblusuarios`
--

DROP TABLE IF EXISTS `tblusuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblusuarios` (
  `usuarioIdentidad` varchar(25) NOT NULL,
  `usuarioPrimerNombre` varchar(45) NOT NULL,
  `usuarioSegundoNombre` varchar(45) NOT NULL,
  `usuarioPrimerApellido` varchar(45) NOT NULL,
  `usuarioSegundoApellido` varchar(45) NOT NULL,
  `usuarioNumeroColegiacion` varchar(45) NOT NULL,
  `usuarioCelular` varchar(45) NOT NULL,
  `usuarioTelefono` varchar(45) NOT NULL,
  `usuarioDireccion` varchar(45) NOT NULL,
  `usuarioContrasenia` varchar(45) NOT NULL,
  `estadoCuentaId` int(11) NOT NULL,
  `rolId` int(11) NOT NULL,
  `usuarioCorreo` varchar(100) NOT NULL,
  PRIMARY KEY (`usuarioIdentidad`),
  KEY `rolId_idx` (`rolId`),
  KEY `estadoCuentaId_idx` (`estadoCuentaId`),
  CONSTRAINT `estadoCuentaId` FOREIGN KEY (`estadoCuentaId`) REFERENCES `tblestadocuenta` (`estadoCuentaId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `rolId` FOREIGN KEY (`rolId`) REFERENCES `tblroles` (`rolId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblusuarios`
--

LOCK TABLES `tblusuarios` WRITE;
/*!40000 ALTER TABLE `tblusuarios` DISABLE KEYS */;
INSERT INTO `tblusuarios` VALUES ('0801-1995-08222asdasd','asd','asd','asddfs','asd','qwe','asd','asd','asd','a3ac3570da3247fb6938d3a5543549ba',2,3,'j@superrito.com'),('0801-1995-085858','asd','asd','asd','sad','ads','99999','9999999','asdsdasad','4e55305a027551bf6e92a9019b57f80a',1,3,'j@superrito.com'),('0801199503314','Juan','Luis','Lopez','Paz','123456789','9876-5432','22244-8572','Colonia Palmira','47e2d80be5e155d4bade80d05828bf82',3,3,'prueba1@superrito.com'),('1','asd','asd','asddfs','dfdf','654','546','123','asdasd','0c9c61851b54a0765af2fe0502aee178',3,3,'j@superrito.com'),('1111111','X','Y','Z','W','11111','99-85','88-85','tegus','xD',3,3,''),('123123','jk','lp','xyz','abcd','1212132123','9966','5522','sdfdfsdfs','d41d8cd98f00b204e9800998ecf8427e',3,3,''),('123456789','jkkk','lllll','llll','ooooo','321654','99999','888888','asd','67e76f0191fa3a273ed2ef60c8c37789',3,3,'a@b.com'),('13212132132123','Juan','lp','asda','Paz','12123','9642-3311','2245-6875','asadsads','caf1a3dfb505ffed0d024130f58c5cfa',3,3,''),('321','asdadsasdads','zxczxzcx','sdfsdf','zxcfd','321','456','456','fg','6c4cd3e54f1558cdfcd36b9c7bdef137',3,3,'j@superrito.com'),('53535','ssa','sssd','dsdsds','cdcd','53535','545454','545454','sdsds','6900795a6abba4305e3905b1851c7d39',3,3,'luis@hotmail.es'),('789654','jkl','asdasd','vgfui','jhv','8745','987','09','kjkj','79c57c591d62a2c57d17b3be5cf0385a',3,3,''),('9999','dfsdsf','lp','5334','456456456','45343','9966','6345','fgjfgfgj','d6acc0b68b294c64de181af391941921',3,3,'');
/*!40000 ALTER TABLE `tblusuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblvoltajes`
--

DROP TABLE IF EXISTS `tblvoltajes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblvoltajes` (
  `voltajeId` int(11) NOT NULL AUTO_INCREMENT,
  `voltajeDescripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`voltajeId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblvoltajes`
--

LOCK TABLES `tblvoltajes` WRITE;
/*!40000 ALTER TABLE `tblvoltajes` DISABLE KEYS */;
INSERT INTO `tblvoltajes` VALUES (1,'13.4 KV'),(2,'34.5 KV');
/*!40000 ALTER TABLE `tblvoltajes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-20 10:17:55
