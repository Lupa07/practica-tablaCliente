import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'practica-tablaCliente';

  datos: any = [
    { "id": "1", "referencia": "02108", "logo": "https://logistics.beateam.es/azurglobal/storage/250/MTC.png", "usuario": "Morillo", "observacion": "", "cantidad": "1", "estado": "Entregada", "fecha": "2021-09-29 00:51:39", "tipo": "Mesa", "codigo_cliente": "287.10", "alias_cliente": "POLIVISO VISO" },
    { "id": "2", "referencia": "KDP457490", "logo": "https://logistics.beateam.es/azurglobal/storage/269/SNR.png", "usuario": "Morillo", "observacion": "407-L", "cantidad": "2", "estado": "Pendiente", "fecha": "2021-09-11 09:25:08", "tipo": "Ruta", "codigo_cliente": "257.10", "alias_cliente": "TURECAMBIO" },
    { "id": "3", "referencia": "15972", "logo": "https://logistics.beateam.es/azurglobal/storage/357/FARE.png", "usuario": "Luismi", "observacion": "407-L", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-29 03:06:16", "tipo": "Ruta", "codigo_cliente": "257.10", "alias_cliente": "TURECAMBIO" },
    { "id": "4", "referencia": "6213182", "logo": "https://logistics.beateam.es/azurglobal/storage/277/VIL.png", "usuario": "Morillo", "observacion": "407-L", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-15 21:16:22", "tipo": "Ruta", "codigo_cliente": "257.10", "alias_cliente": "TURECAMBIO" },
    { "id": "5", "referencia": "5PK1435", "logo": "https://logistics.beateam.es/azurglobal/storage/212/DAY.png", "usuario": "Luismi", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-16 20:01:56", "tipo": "Mesa", "codigo_cliente": "49.10", "alias_cliente": "HISPALIS" },
    { "id": "6", "referencia": "4PK853", "logo": "https://logistics.beateam.es/azurglobal/storage/212/DAY.png", "usuario": "Luismi", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-01 19:40:05", "tipo": "Mesa", "codigo_cliente": "49.10", "alias_cliente": "HISPALIS" },
    { "id": "7", "referencia": "0092M60100", "logo": "https://logistics.beateam.es/azurglobal/storage/203/BOS.png", "usuario": "Christian", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-17 22:20:05", "tipo": "Ruta", "codigo_cliente": "205.10", "alias_cliente": "GOMEZ" },
    { "id": "8", "referencia": "6290655", "logo": "https://logistics.beateam.es/azurglobal/storage/277/VIL.png", "usuario": "Luismi", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-10-03 22:30:31", "tipo": "Ruta", "codigo_cliente": "205.10", "alias_cliente": "GOMEZ" },
    { "id": "9", "referencia": "6235020", "logo": "https://logistics.beateam.es/azurglobal/storage/277/VIL.png", "usuario": "Morillo", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-29 03:33:33", "tipo": "Ruta", "codigo_cliente": "205.10", "alias_cliente": "GOMEZ" },
    { "id": "10", "referencia": "LX1764", "logo": "https://logistics.beateam.es/azurglobal/storage/239/MAH.png", "usuario": "Luismi", "observacion": "LO PODEIS MANDAR A MLG Y LO RECOGEMOS ALLI????", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-03 13:32:35", "tipo": "Mesa", "codigo_cliente": "2159.10", "alias_cliente": "REC. ANDALUCIA" },
    { "id": "11", "referencia": "OX776D", "logo": "https://logistics.beateam.es/azurglobal/storage/239/MAH.png", "usuario": "Luismi", "observacion": "", "cantidad": "2", "estado": "Entregada", "fecha": "2021-09-15 10:55:30", "tipo": "Mesa", "codigo_cliente": "287.20", "alias_cliente": "POLIVISO LORA" },
    { "id": "12", "referencia": "AR7352", "logo": "https://logistics.beateam.es/azurglobal/storage/352/QUICK-STEER.png", "usuario": "Christian", "observacion": "JOSE ANTONIO-  PIDE ALEJ", "cantidad": "2", "estado": "Pendiente", "fecha": "2021-09-28 15:29:56", "tipo": "Ruta", "codigo_cliente": "342.10", "alias_cliente": "ECAUTO" },
    { "id": "13", "referencia": "F026407143", "logo": "https://logistics.beateam.es/azurglobal/storage/203/BOS.png", "usuario": "Christian", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-16 18:16:04", "tipo": "Ruta", "codigo_cliente": "184.10", "alias_cliente": "MAFERAUTO" },
    { "id": "14", "referencia": "LX4246", "logo": "https://logistics.beateam.es/azurglobal/storage/239/MAH.png", "usuario": "Luismi", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-27 17:44:16", "tipo": "Ruta", "codigo_cliente": "184.10", "alias_cliente": "MAFERAUTO" },
    { "id": "15", "referencia": "JHE267T", "logo": "https://logistics.beateam.es/azurglobal/storage/273/TRW.png", "usuario": "Morillo", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-26 11:18:22", "tipo": "Mesa", "codigo_cliente": "252.10", "alias_cliente": "JOYFA" }, { "id": "16", "referencia": "6102339", "logo": "https://logistics.beateam.es/azurglobal/storage/191/ALKAR.png", "usuario": "Rafagalvez", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-25 19:37:25", "tipo": "Mesa", "codigo_cliente": "125.10", "alias_cliente": "ALBEA CARRERA" },
    { "id": "17", "referencia": "10-1111", "logo": "https://logistics.beateam.es/azurglobal/storage/258/IJS.png", "usuario": "Christian", "observacion": "", "cantidad": "2", "estado": "Desconsolidada", "fecha": "2021-09-16 04:08:22", "tipo": "Mesa", "codigo_cliente": "125.10", "alias_cliente": "ALBEA CARRERA" },
    { "id": "18", "referencia": "15471", "logo": "https://logistics.beateam.es/azurglobal/storage/357/FARE.png", "usuario": "Rafagalvez", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-10-02 02:49:28", "tipo": "Mesa", "codigo_cliente": "125.10", "alias_cliente": "ALBEA CARRERA" },
    { "id": "19", "referencia": "60270530", "logo": "https://logistics.beateam.es/azurglobal/storage/237/LEM.png", "usuario": "Froldan", "observacion": "", "cantidad": "3", "estado": "Entregada", "fecha": "2021-09-26 11:30:31", "tipo": "Mesa", "codigo_cliente": "252.10", "alias_cliente": "JOYFA" },
    { "id": "20", "referencia": "15471", "logo": "https://logistics.beateam.es/azurglobal/storage/357/FARE.png", "usuario": "Rafagalvez", "observacion": "", "cantidad": "1", "estado": "Entregada", "fecha": "2021-09-23 22:38:40", "tipo": "Mesa", "codigo_cliente": "287.20", "alias_cliente": "POLIVISO LORA" },
    { "id": "21", "referencia": "11041", "logo": "https://logistics.beateam.es/azurglobal/storage/357/FARE.png", "usuario": "Froldan", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-17 22:42:28", "tipo": "Ruta", "codigo_cliente": "294.10", "alias_cliente": "DOMINGUEZ (CHIPIONA)" },
    { "id": "22", "referencia": "845033", "logo": "https://logistics.beateam.es/azurglobal/storage/225/GSP.png", "usuario": "Morillo", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-30 21:59:30", "tipo": "Ruta", "codigo_cliente": "294.10", "alias_cliente": "DOMINGUEZ (CHIPIONA)" },
    { "id": "23", "referencia": "01110", "logo": "https://logistics.beateam.es/azurglobal/storage/250/MTC.png", "usuario": "Christian", "observacion": "", "cantidad": "4", "estado": "Pendiente", "fecha": "2021-09-01 11:54:46", "tipo": "Ruta", "codigo_cliente": "294.10", "alias_cliente": "DOMINGUEZ (CHIPIONA)" },
    { "id": "24", "referencia": "10-1215", "logo": "https://logistics.beateam.es/azurglobal/storage/258/IJS.png", "usuario": "Luismi", "observacion": "", "cantidad": "3", "estado": "Pendiente", "fecha": "2021-09-16 10:13:03", "tipo": "Ruta", "codigo_cliente": "232.10", "alias_cliente": "PRADO" },
    { "id": "25", "referencia": "270100476", "logo": "https://logistics.beateam.es/azurglobal/storage/198/998.png", "usuario": "Rafagalvez", "observacion": "", "cantidad": "2", "estado": "Pendiente", "fecha": "2021-10-01 11:33:02", "tipo": "Ruta", "codigo_cliente": "232.10", "alias_cliente": "PRADO" },
    { "id": "26", "referencia": "330137", "logo": "https://logistics.beateam.es/azurglobal/storage/215/ERA.png", "usuario": "Froldan", "observacion": "", "cantidad": "2", "estado": "Pendiente", "fecha": "2021-09-19 17:26:06", "tipo": "Ruta", "codigo_cliente": "232.10", "alias_cliente": "PRADO" },
    { "id": "27", "referencia": "L106", "logo": "https://logistics.beateam.es/azurglobal/storage/323/MISFAT.png", "usuario": "Rafagalvez", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-04 18:38:54", "tipo": "Mesa", "codigo_cliente": "49.10", "alias_cliente": "HISPALIS" },
    { "id": "28", "referencia": "F689", "logo": "https://logistics.beateam.es/azurglobal/storage/323/MISFAT.png", "usuario": "Froldan", "observacion": "", "cantidad": "2", "estado": "Pendiente", "fecha": "2021-09-13 17:17:20", "tipo": "Ruta", "codigo_cliente": "8.10", "alias_cliente": "RECAMARISMAS" },
    { "id": "29", "referencia": "P401A", "logo": "https://logistics.beateam.es/azurglobal/storage/323/MISFAT.png", "usuario": "Luismi", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-09 09:56:03", "tipo": "Ruta", "codigo_cliente": "212.10", "alias_cliente": "COLON HUELVA" },
    { "id": "30", "referencia": "FDES3665", "logo": "https://logistics.beateam.es/azurglobal/storage/246/MOG.png", "usuario": "Morillo", "observacion": "CONTADO 32", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-23 23:31:43", "tipo": "Mesa", "codigo_cliente": "335.10", "alias_cliente": "RECAMCAR" },
    { "id": "31", "referencia": "715106053000", "logo": "https://logistics.beateam.es/azurglobal/storage/322/MAGNETI.png", "usuario": "Froldan", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-14 06:53:04", "tipo": "Ruta", "codigo_cliente": "347.10", "alias_cliente": "NITRO" },
    { "id": "32", "referencia": "101457", "logo": "https://logistics.beateam.es/azurglobal/storage/341/Logo-doga.png", "usuario": "Morillo", "observacion": "00823", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-15 07:59:05", "tipo": "Mesa", "codigo_cliente": "125.10", "alias_cliente": "ALBEA CARRERA" },
    { "id": "33", "referencia": "9876", "logo": "https://logistics.beateam.es/azurglobal/storage/357/FARE.png", "usuario": "Rafagalvez", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-21 08:34:27", "tipo": "Mesa", "codigo_cliente": "288.10", "alias_cliente": "REGA CASTIBLANCO" },
    { "id": "34", "referencia": "2105128", "logo": "https://logistics.beateam.es/azurglobal/storage/191/ALKAR.png", "usuario": "Froldan", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-19 07:06:59", "tipo": "Mesa", "codigo_cliente": "288.10", "alias_cliente": "REGA CASTIBLANCO" },
    { "id": "35", "referencia": "2205802", "logo": "https://logistics.beateam.es/azurglobal/storage/191/ALKAR.png", "usuario": "Rafagalvez", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-10-04 16:52:03", "tipo": "Mesa", "codigo_cliente": "378.10", "alias_cliente": "LOW COST" },
    { "id": "36", "referencia": "2746127", "logo": "https://logistics.beateam.es/azurglobal/storage/191/ALKAR.png", "usuario": "Froldan", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-04 20:42:34", "tipo": "Mesa", "codigo_cliente": "49.10", "alias_cliente": "HISPALIS" },
    { "id": "37", "referencia": "2302275", "logo": "https://logistics.beateam.es/azurglobal/storage/191/ALKAR.png", "usuario": "Christian", "observacion": "", "cantidad": "4", "estado": "Entregada", "fecha": "2021-09-28 14:37:05", "tipo": "Mesa", "codigo_cliente": "45.10", "alias_cliente": "ALPHA" },
    { "id": "38", "referencia": "6164361", "logo": "https://logistics.beateam.es/azurglobal/storage/191/ALKAR.png", "usuario": "Rafagalvez", "observacion": "", "cantidad": "1", "estado": "Entregada", "fecha": "2021-09-23 00:47:14", "tipo": "Mesa", "codigo_cliente": "287.20", "alias_cliente": "POLIVISO LORA" },
    { "id": "39", "referencia": "6422994", "logo": "https://logistics.beateam.es/azurglobal/storage/191/ALKAR.png", "usuario": "Froldan", "observacion": "", "cantidad": "2", "estado": "Pendiente", "fecha": "2021-09-05 00:07:17", "tipo": "Ruta", "codigo_cliente": "19.10", "alias_cliente": "LA CINTA HUELVA" },
    { "id": "40", "referencia": "6426852", "logo": "https://logistics.beateam.es/azurglobal/storage/191/ALKAR.png", "usuario": "Luismi", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-10-06 07:14:45", "tipo": "Mesa", "codigo_cliente": "9.10", "alias_cliente": "TRANSFER ALCALA" },
    { "id": "41", "referencia": "6432307", "logo": "https://logistics.beateam.es/azurglobal/storage/191/ALKAR.png", "usuario": "Rafagalvez", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-24 01:34:10", "tipo": "Ruta", "codigo_cliente": "222.10", "alias_cliente": "REVISA" },
    { "id": "42", "referencia": "6471597", "logo": "https://logistics.beateam.es/azurglobal/storage/191/ALKAR.png", "usuario": "Christian", "observacion": "", "cantidad": "2", "estado": "Desconsolidada", "fecha": "2021-10-05 17:14:19", "tipo": "Mesa", "codigo_cliente": "9.10", "alias_cliente": "TRANSFER ALCALA" },
    { "id": "43", "referencia": "6472845", "logo": "https://logistics.beateam.es/azurglobal/storage/191/ALKAR.png", "usuario": "Christian", "observacion": "cl/ mariano hispa", "cantidad": "1", "estado": "Entregada", "fecha": "2021-09-25 18:17:10", "tipo": "Mesa", "codigo_cliente": "30.10", "alias_cliente": "VELASCO" },
    { "id": "44", "referencia": "4465", "logo": "https://logistics.beateam.es/azurglobal/storage/357/FARE.png", "usuario": "Morillo", "observacion": "", "cantidad": "1", "estado": "Entregada", "fecha": "2021-09-04 20:03:56", "tipo": "Mesa", "codigo_cliente": "30.10", "alias_cliente": "VELASCO" }, { "id": "45", "referencia": "2028", "logo": "https://logistics.beateam.es/azurglobal/storage/357/FARE.png", "usuario": "Luismi", "observacion": "", "cantidad": "1", "estado": "Entregada", "fecha": "2021-09-27 16:34:21", "tipo": "Mesa", "codigo_cliente": "287.20", "alias_cliente": "POLIVISO LORA" },
    { "id": "46", "referencia": "101307", "logo": "https://logistics.beateam.es/azurglobal/storage/341/Logo-doga.png", "usuario": "Luismi", "observacion": "2061203 9103 ant mora", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-26 03:14:43", "tipo": "Mesa", "codigo_cliente": "434.70", "alias_cliente": "GRUPO PE\u00d1A ALGECIRAS" },
    { "id": "47", "referencia": "101310", "logo": "https://logistics.beateam.es/azurglobal/storage/341/Logo-doga.png", "usuario": "Froldan", "observacion": "cuca", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-23 10:50:55", "tipo": "Mesa", "codigo_cliente": "433.10", "alias_cliente": "RYB" },
    { "id": "48", "referencia": "MEAX6341", "logo": "https://logistics.beateam.es/azurglobal/storage/246/MOG.png", "usuario": "Christian", "observacion": "", "cantidad": "1", "estado": "Entregada", "fecha": "2021-09-23 13:05:57", "tipo": "Mesa", "codigo_cliente": "287.20", "alias_cliente": "POLIVISO LORA" },
    { "id": "49", "referencia": "6184469", "logo": "https://logistics.beateam.es/azurglobal/storage/277/VIL.png", "usuario": "Rafagalvez", "observacion": "00470", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-30 09:36:48", "tipo": "Mesa", "codigo_cliente": "125.10", "alias_cliente": "ALBEA CARRERA" },
    { "id": "50", "referencia": "6184470", "logo": "https://logistics.beateam.es/azurglobal/storage/277/VIL.png", "usuario": "Morillo", "observacion": "", "cantidad": "2", "estado": "Entregada", "fecha": "2021-09-04 04:14:42", "tipo": "Mesa", "codigo_cliente": "287.10", "alias_cliente": "POLIVISO VISO" },
    { "id": "51", "referencia": "COF100119S", "logo": "https://logistics.beateam.es/azurglobal/storage/206/CHA.png", "usuario": "Rafagalvez", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-02 20:29:11", "tipo": "Mesa", "codigo_cliente": "31.10", "alias_cliente": "PAVON TOMARES" },
    { "id": "52", "referencia": "OX1138D", "logo": "https://logistics.beateam.es/azurglobal/storage/239/MAH.png", "usuario": "Morillo", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-08 23:34:44", "tipo": "Mesa", "codigo_cliente": "31.10", "alias_cliente": "PAVON TOMARES" },
    { "id": "53", "referencia": "3182654204", "logo": "https://logistics.beateam.es/azurglobal/storage/263/SAC.png", "usuario": "Froldan", "observacion": "", "cantidad": "1", "estado": "Entregada", "fecha": "2021-09-16 08:17:04", "tipo": "Mesa", "codigo_cliente": "382.10", "alias_cliente": "BAREA" },
    { "id": "54", "referencia": "3848", "logo": "https://logistics.beateam.es/azurglobal/storage/357/FARE.png", "usuario": "Rafagalvez", "observacion": "OZEMI", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-10-01 10:42:09", "tipo": "Ruta", "codigo_cliente": "18.10", "alias_cliente": "LA PILA" },
    { "id": "55", "referencia": "11418", "logo": "https://logistics.beateam.es/azurglobal/storage/357/FARE.png", "usuario": "Rafagalvez", "observacion": "OZEMI", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-24 17:16:45", "tipo": "Ruta", "codigo_cliente": "18.10", "alias_cliente": "LA PILA" },
    { "id": "56", "referencia": "804527", "logo": "https://logistics.beateam.es/azurglobal/storage/275/VAL.png", "usuario": "Luismi", "observacion": "", "cantidad": "2", "estado": "Pendiente", "fecha": "2021-09-02 04:17:21", "tipo": "Ruta", "codigo_cliente": "259.20", "alias_cliente": "NAVARRO HNOS JEREZ" },
    { "id": "57", "referencia": "O263", "logo": "https://logistics.beateam.es/azurglobal/storage/213/DOL.png", "usuario": "Luismi", "observacion": "", "cantidad": "1", "estado": "Entregada", "fecha": "2021-09-29 01:27:28", "tipo": "Mesa", "codigo_cliente": "440.10", "alias_cliente": "TORREAUTO" },
    { "id": "58", "referencia": "2741853", "logo": "https://logistics.beateam.es/azurglobal/storage/191/ALKAR.png", "usuario": "Christian", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-28 14:35:29", "tipo": "Ruta", "codigo_cliente": "9003.10", "alias_cliente": "AZUR GLOBAL GRANADA" }, { "id": "59", "referencia": "DF4166", "logo": "https://logistics.beateam.es/azurglobal/storage/273/TRW.png", "usuario": "Froldan", "observacion": "", "cantidad": "2", "estado": "Pendiente", "fecha": "2021-09-29 05:11:18", "tipo": "Ruta", "codigo_cliente": "9003.10", "alias_cliente": "AZUR GLOBAL GRANADA" },
    { "id": "60", "referencia": "600020000", "logo": "https://logistics.beateam.es/azurglobal/storage/238/LUK.png", "usuario": "Morillo", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-25 15:34:08", "tipo": "Ruta", "codigo_cliente": "9003.10", "alias_cliente": "AZUR GLOBAL GRANADA" },
    { "id": "61", "referencia": "R15461", "logo": "https://logistics.beateam.es/azurglobal/storage/269/SNR.png", "usuario": "Morillo", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-30 00:06:40", "tipo": "Ruta", "codigo_cliente": "9003.10", "alias_cliente": "AZUR GLOBAL GRANADA" },
    { "id": "62", "referencia": "352741070000", "logo": "https://logistics.beateam.es/azurglobal/storage/322/MAGNETI.png", "usuario": "Rafagalvez", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-10-01 23:15:45", "tipo": "Ruta", "codigo_cliente": "9003.10", "alias_cliente": "AZUR GLOBAL GRANADA" },
    { "id": "63", "referencia": "6284000056", "logo": "https://logistics.beateam.es/azurglobal/storage/263/SAC.png", "usuario": "Rafagalvez", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-10 13:15:55", "tipo": "Ruta", "codigo_cliente": "9003.10", "alias_cliente": "AZUR GLOBAL GRANADA" },
    { "id": "64", "referencia": "OE198T10", "logo": "https://logistics.beateam.es/azurglobal/storage/206/CHA.png", "usuario": "Froldan", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-10-06 06:47:07", "tipo": "Ruta", "codigo_cliente": "9003.10", "alias_cliente": "AZUR GLOBAL GRANADA" },
    { "id": "65", "referencia": "17-1085", "logo": "https://logistics.beateam.es/azurglobal/storage/258/IJS.png", "usuario": "Luismi", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-21 02:25:53", "tipo": "Ruta", "codigo_cliente": "9003.10", "alias_cliente": "AZUR GLOBAL GRANADA" },
    { "id": "66", "referencia": "GPW00", "logo": "https://logistics.beateam.es/azurglobal/storage/232/JAP.png", "usuario": "Luismi", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-12 10:00:05", "tipo": "Ruta", "codigo_cliente": "9003.10", "alias_cliente": "AZUR GLOBAL GRANADA" },
    { "id": "67", "referencia": "2290601076", "logo": "https://logistics.beateam.es/azurglobal/storage/263/SAC.png", "usuario": "Rafagalvez", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-21 12:50:47", "tipo": "Ruta", "codigo_cliente": "9003.10", "alias_cliente": "AZUR GLOBAL GRANADA" },
    { "id": "68", "referencia": "99130300", "logo": "https://logistics.beateam.es/azurglobal/storage/271/SWA.png", "usuario": "Christian", "observacion": "FALCO", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-05 19:33:34", "tipo": "Ruta", "codigo_cliente": "279.10", "alias_cliente": "FALCO" },
    { "id": "69", "referencia": "6290786", "logo": "https://logistics.beateam.es/azurglobal/storage/277/VIL.png", "usuario": "Rafagalvez", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-22 01:00:45", "tipo": "Ruta", "codigo_cliente": "294.10", "alias_cliente": "DOMINGUEZ (CHIPIONA)" },
    { "id": "70", "referencia": "845033", "logo": "https://logistics.beateam.es/azurglobal/storage/225/GSP.png", "usuario": "Morillo", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-12 09:37:35", "tipo": "Mesa", "codigo_cliente": "2159.10", "alias_cliente": "REC. ANDALUCIA" },
    { "id": "71", "referencia": "10-1172", "logo": "https://logistics.beateam.es/azurglobal/storage/258/IJS.png", "usuario": "Christian", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-27 04:24:41", "tipo": "Mesa", "codigo_cliente": "378.10", "alias_cliente": "LOW COST" },
    { "id": "72", "referencia": "9920", "logo": "https://logistics.beateam.es/azurglobal/storage/357/FARE.png", "usuario": "Luismi", "observacion": "GDB1515", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-28 15:47:31", "tipo": "Ruta", "codigo_cliente": "204.10", "alias_cliente": "RECAUTO SEVILLA" },
    { "id": "73", "referencia": "08350750", "logo": "https://logistics.beateam.es/azurglobal/storage/318/MONTCADA.png", "usuario": "Luismi", "observacion": "33490/700028", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-13 01:01:43", "tipo": "Ruta", "codigo_cliente": "204.10", "alias_cliente": "RECAUTO SEVILLA" },
    { "id": "74", "referencia": "LA428/S", "logo": "https://logistics.beateam.es/azurglobal/storage/239/MAH.png", "usuario": "Froldan", "observacion": "L332", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-03 08:38:08", "tipo": "Ruta", "codigo_cliente": "204.10", "alias_cliente": "RECAUTO SEVILLA" },
    { "id": "75", "referencia": "00063", "logo": "https://logistics.beateam.es/azurglobal/storage/250/MTC.png", "usuario": "Morillo", "observacion": "C447", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-02 21:58:55", "tipo": "Ruta", "codigo_cliente": "204.10", "alias_cliente": "RECAUTO SEVILLA" },
    { "id": "76", "referencia": "04978", "logo": "https://logistics.beateam.es/azurglobal/storage/250/MTC.png", "usuario": "Luismi", "observacion": "A1228", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-10 06:33:59", "tipo": "Ruta", "codigo_cliente": "204.10", "alias_cliente": "RECAUTO SEVILLA" },
    { "id": "77", "referencia": "05525", "logo": "https://logistics.beateam.es/azurglobal/storage/250/MTC.png", "usuario": "Christian", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-14 13:16:15", "tipo": "Mesa", "codigo_cliente": "144.10", "alias_cliente": "DURAN" },
    { "id": "78", "referencia": "270100426", "logo": "https://logistics.beateam.es/azurglobal/storage/198/998.png", "usuario": "Christian", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-19 11:46:08", "tipo": "Mesa", "codigo_cliente": "335.10", "alias_cliente": "RECAMCAR" },
    { "id": "79", "referencia": "181392", "logo": "https://logistics.beateam.es/azurglobal/storage/321/Logo_Icer_web.png", "usuario": "Luismi", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-20 21:24:33", "tipo": "Ruta", "codigo_cliente": "347.10", "alias_cliente": "NITRO" },
    { "id": "80", "referencia": "P245", "logo": "https://logistics.beateam.es/azurglobal/storage/323/MISFAT.png", "usuario": "Rafagalvez", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-29 23:29:45", "tipo": "Mesa", "codigo_cliente": "355.10", "alias_cliente": "DIAZ JIMENEZ" },
    { "id": "81", "referencia": "6PK1705", "logo": "https://logistics.beateam.es/azurglobal/storage/212/DAY.png", "usuario": "Morillo", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-13 14:13:43", "tipo": "Ruta", "codigo_cliente": "389.10", "alias_cliente": "TRECAUTO" },
    { "id": "82", "referencia": "33006", "logo": "https://logistics.beateam.es/azurglobal/storage/229/IAD.png", "usuario": "Froldan", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-26 04:08:10", "tipo": "Mesa", "codigo_cliente": "30.10", "alias_cliente": "VELASCO" },
    { "id": "83", "referencia": "IP150030229", "logo": "https://logistics.beateam.es/azurglobal/storage/198/998.png", "usuario": "Froldan", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-18 10:05:28", "tipo": "Ruta", "codigo_cliente": "389.10", "alias_cliente": "TRECAUTO" },
    { "id": "84", "referencia": "DF4964", "logo": "https://logistics.beateam.es/azurglobal/storage/273/TRW.png", "usuario": "Christian", "observacion": "RETIRA SAN PABLO", "cantidad": "1", "estado": "Entregada", "fecha": "2021-09-14 14:27:32", "tipo": "Mesa", "codigo_cliente": "382.10", "alias_cliente": "BAREA" },
    { "id": "85", "referencia": "GDB3467", "logo": "https://logistics.beateam.es/azurglobal/storage/273/TRW.png", "usuario": "Luismi", "observacion": "", "cantidad": "1", "estado": "Entregada", "fecha": "2021-09-06 14:35:04", "tipo": "Mesa", "codigo_cliente": "440.10", "alias_cliente": "TORREAUTO" },
    { "id": "86", "referencia": "08700650", "logo": "https://logistics.beateam.es/azurglobal/storage/318/MONTCADA.png", "usuario": "Morillo", "observacion": "", "cantidad": "2", "estado": "Pendiente", "fecha": "2021-09-15 11:08:20", "tipo": "Ruta", "codigo_cliente": "375.10", "alias_cliente": "SUMIREC OLIVARES" },
    { "id": "87", "referencia": "6PK1205", "logo": "https://logistics.beateam.es/azurglobal/storage/212/DAY.png", "usuario": "Luismi", "observacion": "OC977/1", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-10-02 08:47:09", "tipo": "Ruta", "codigo_cliente": "129.10", "alias_cliente": "SEVILLA" },
    { "id": "88", "referencia": "PAK20AF", "logo": "https://logistics.beateam.es/azurglobal/storage/232/JAP.png", "usuario": "Luismi", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-25 07:17:05", "tipo": "Ruta", "codigo_cliente": "129.10", "alias_cliente": "SEVILLA" },
    { "id": "89", "referencia": "08610300", "logo": "https://logistics.beateam.es/azurglobal/storage/318/MONTCADA.png", "usuario": "Luismi", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-04 06:13:31", "tipo": "Ruta", "codigo_cliente": "71.10", "alias_cliente": "AUTOPARTS HUELVA" },
    { "id": "90", "referencia": "AVX13X1150", "logo": "https://logistics.beateam.es/azurglobal/storage/356/CONTITECH.png", "usuario": "Christian", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-15 23:05:08", "tipo": "Mesa", "codigo_cliente": "402.10", "alias_cliente": "FALCON" },
    { "id": "91", "referencia": "3000951120", "logo": "https://logistics.beateam.es/azurglobal/storage/263/SAC.png", "usuario": "Rafagalvez", "observacion": "", "cantidad": "1", "estado": "Desconsolidada", "fecha": "2021-09-29 00:49:31", "tipo": "Mesa", "codigo_cliente": "402.10", "alias_cliente": "FALCON" },
    { "id": "92", "referencia": "51928", "logo": "https://logistics.beateam.es/azurglobal/storage/233/JBM.png", "usuario": "Morillo", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-13 07:11:00", "tipo": "Mesa", "codigo_cliente": "433.10", "alias_cliente": "RYB" },
    { "id": "93", "referencia": "GE35723", "logo": "https://logistics.beateam.es/azurglobal/storage/269/SNR.png", "usuario": "Morillo", "observacion": "", "cantidad": "2", "estado": "Pendiente", "fecha": "2021-10-03 08:54:56", "tipo": "Mesa", "codigo_cliente": "433.10", "alias_cliente": "RYB" },
    { "id": "94", "referencia": "R15273", "logo": "https://logistics.beateam.es/azurglobal/storage/269/SNR.png", "usuario": "Luismi", "observacion": "manuel jurado", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-09 23:50:10", "tipo": "Ruta", "codigo_cliente": "58.10", "alias_cliente": "MORALES VILLAMARTIN" },
    { "id": "95", "referencia": "LX3987", "logo": "https://logistics.beateam.es/azurglobal/storage/239/MAH.png", "usuario": "Luismi", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-11 03:31:10", "tipo": "Mesa", "codigo_cliente": "49.10", "alias_cliente": "HISPALIS" },
    { "id": "96", "referencia": "F142", "logo": "https://logistics.beateam.es/azurglobal/storage/323/MISFAT.png", "usuario": "Morillo", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-22 23:19:56", "tipo": "Mesa", "codigo_cliente": "49.10", "alias_cliente": "HISPALIS" },
    { "id": "97", "referencia": "BMAX2426", "logo": "https://logistics.beateam.es/azurglobal/storage/246/MOG.png", "usuario": "Luismi", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-10-03 21:03:29", "tipo": "Mesa", "codigo_cliente": "287.20", "alias_cliente": "POLIVISO LORA" },
    { "id": "98", "referencia": "BMTC0920", "logo": "https://logistics.beateam.es/azurglobal/storage/246/MOG.png", "usuario": "Rafagalvez", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-10-03 17:19:48", "tipo": "Ruta", "codigo_cliente": "389.10", "alias_cliente": "TRECAUTO" },
    { "id": "99", "referencia": "BMTC0918", "logo": "https://logistics.beateam.es/azurglobal/storage/246/MOG.png", "usuario": "Morillo", "observacion": "", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-04 13:12:28", "tipo": "Mesa", "codigo_cliente": "49.10", "alias_cliente": "HISPALIS" },
    { "id": "100", "referencia": "3182654146", "logo": "https://logistics.beateam.es/azurglobal/storage/263/SAC.png", "usuario": "Froldan", "observacion": "ALEJANDRO----DEJAR FALCON", "cantidad": "1", "estado": "Pendiente", "fecha": "2021-09-10 06:29:35", "tipo": "Mesa", "codigo_cliente": "303.10", "alias_cliente": "SURTRES (SEVILLA)" }
  ]
  filtrado: any;
  datosAmandar: any = []


  ngOnInit(): void {
    this.ordenarPorFecha(this.datos)
    this.datosAmandar = this.datos;
  }

  ordenarPorFecha(datos: any[]) {
   
    datos.sort(function (dato1,dato2) {
      if (dato1.fecha < dato2.fecha) {
        return -1
      } else if (dato1.fecha > dato2.fecha) {
        return 1
      } else {
        return 0
      }
    })
  }





  buscarFiltroMaestro(buscarFiltro: any) {
    this.filtrado = Object.assign({}, buscarFiltro);
    this.cargarDatos();

  }

  cargarDatos() {
    this.datosAmandar = [];

    for (let i = 0; i <= this.datos.length; i++) {

      if (this.datos[i].alias_cliente.toLowerCase().indexOf(this.filtrado.cliente.toLowerCase()) >= 0) {
        if (this.datos[i].usuario.toLowerCase().indexOf(this.filtrado.usuario.toLowerCase()) >= 0) {
          if (this.datos[i].referencia.toLowerCase().indexOf(this.filtrado.referencia.toLowerCase()) >= 0) {
            if (this.datos[i].tipo.toLowerCase().indexOf(this.filtrado.tipo.toLowerCase()) >= 0) {
              if (this.filtraEstado(this.datos[i].estado)) {
                if (this.filtraFecha(this.datos[i].fecha)) {
                  this.datosAmandar.push(this.datos[i])
                }

              }

            }

          }
        }
      }
    }
  }
  filtraFecha(fecha: string) {
    console.log("dentro filtro fecha")
    let fechaDatos = new Date(fecha)
    console.log(fechaDatos)
    if (this.filtrado.fecha.length === 0) {
      console.log('dentro de if de filtrar fecha')
      return true
    } else {
      console.log('dentro de else de filtrar fecha')
      if (this.filtrado.fecha[0] <= fechaDatos && this.filtrado.fecha[1] >= fechaDatos) {
        console.log('dentro de if del else de arriba')
        return true
      }

    }
    return false
  }
  filtraEstado(estado: string) {

    if (this.filtrado.pendiente) {

      if (estado.toLowerCase() == "pendiente") {

        return true
      }
    }

    if (this.filtrado.recogiendo) {
      if (estado.toLowerCase() == 'recogiendo') {
        return true
      }
    }
    if (this.filtrado.recogida) {
      if (estado.toLowerCase() == 'recogida') {
        return true;
      }
    }
    if (this.filtrado.desconsolidando) {
      if (estado.toLowerCase() == 'desconsolidando') {
        return true
      }
    }
    if (this.filtrado.desconsolidada) {
      if (estado.toLowerCase() == 'desconsolidada') {
        return true
      }
    }
    if (this.filtrado.entregada) {
      if (estado.toLowerCase() == 'entregada') {
        return true
      }
    }
    if (this.filtrado.incidencia) {
      if (estado.toLowerCase() == 'incidencia') {
        return true;
      }
    }
    if (!this.filtrado.pendiente && !this.filtrado.recogiendo && !this.filtrado.recogida && !this.filtrado.desconsolidando && !this.filtrado.desconsolidada && !this.filtrado.entregada && !this.filtrado.incidencia) {
      return true;
    }

    return false;
  }

}
