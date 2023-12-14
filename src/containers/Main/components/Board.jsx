import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) { // Las tarjetas sobre el Covid-19 se quedarán aquí
    
    // Dados que a API retorna
    const { cases, todayCases, active, deaths, todayDeaths, recovered, critical } = data 

/* 
* Función para devolver el valor o una barra gris.
  * Esqueleto: mejora la interfaz de carga.
 */
    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

    return (
        <Grid container spacing={1}>
            
            <Grid item xs={12} md={4}>
                <Card value={getValue(cases)} label="CASOS" color="#000" />
            </Grid>

            <Grid item xs={12} md={4}>
                <Card value={getValue(todayCases)} label="HOY" color="#000" />
            </Grid>

            <Grid item xs={12} md={4}>
                <Card value={getValue(active)} label="ACTIVOS" color="#000" />
            </Grid>
            
            <Grid item xs={12} md={6}>
                <Card value={getValue(deaths)} label="FALLECIDOS" color="#FF0000" />
            </Grid>

            <Grid item xs={12} md={6}>
                <Card value={getValue(todayDeaths)} label="HOY" color="#FF0000" />
            </Grid>

            <Grid item xs={12} md={6}>
                <Card value={getValue(recovered)} label="RECUPERADOS" color="#008000" />
            </Grid>

            <Grid item xs={12} md={6}>
                <Card value={getValue(critical)} label="CRÍTICOS" color="#FF7F00" />
            </Grid>
        </Grid>
    )
}

export default memo(Board)