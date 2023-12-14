import React, { memo } from 'react'
import RefreshIcon from '../../../assets/images/refresh.svg'
import { Card, Typography, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from './style'

const navigatorHasShare = navigator.share

// Alguns valores e parametros que o arquivo main vai enviar.
function Panel({ updateAt, onChange, data, country, getCovidData }) {
    const { cases, recovered, deaths, todayCases, todayDeaths } = data

    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`Country-${country.label}`} />
            </ItemStyled>
        </MenuItem>
    )

    const textCovid19 = `Country: ${country}, Total Cases: ${cases}, Today's Deaths: ${todayDeaths}, 
    Today's Cases: ${todayCases}, Total Deaths: ${deaths}, Recovered: ${recovered}.`    
    // Documentações mais completas de JS é na Mozilla
    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19)
    }   

    /** 
     * Navegadores que tiverem essa API/suporte
     * title, text e url - valores padrões da API
     */
    const shareInfo = () => {
        navigator.share({
            title: `Covid-19 data- ${country}`,
            text: textCovid19,
            url: '/' // Onde a aplicação está hospedada.
        })
    }

    // Adicionando os métodos. Celular compartilha por Whatsapp e Web permite copiar.
    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                To share
            </Button>
        </div>
    )
    
    const renderCopyButton = (
        <div>
        <Button variant="contained" color="primary" onClick={copyInfo}>
            Copy
        </Button>
    </div>
    )

    return (
        <Card>
            <CardPanelContentStyled>
                <div>
                <Typography variant="h5" component="span" color="primary">Coronavirus (COVID-19) </Typography>
                     <Typography variant="h6" component="span" color="primary">Overview </Typography>
                     <Typography variant="body2" component="span" color="primary">Updated on: {updateAt}</Typography>
                     <div className="pt-2">
                        <Select onChange={onChange} value={country}>
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                    </div>
                </div>
                {navigatorHasShare ? renderShareButton : renderCopyButton}
            </CardPanelContentStyled>
        </Card>
    )
}

export default memo(Panel)