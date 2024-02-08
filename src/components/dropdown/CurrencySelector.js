import { Box, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { useMetaData } from "../../features/meta_data";

/**
 * ##CurrencySelector
 * @param {Object} props 
 * @param {Boolean} props.fullWidth
 * @param {Boolean} props.hasLabel
 * @param {Event} props.onChange
 * @param {("MMK", "USD")} props.defaultCurrency
 * @returns 
 */
function CurrencySelector(props) {
    const { currencies } = useMetaData();
    const { defaultCurrency=null, fullWidth=false, hasLabel=false, onChange } = props;
    const defaultCurrencyId = currencies.filter(c => c.code == defaultCurrency)[0]?.code || null;

    React.useEffect(() => {
        defaultCurrencyId && onChange(defaultCurrencyId);
    }, []);

    return(
        <Select 
            onChange={(e) => onChange(e.target.value)} 
            size="small" 
            fullWidth={fullWidth}
            defaultValue={defaultCurrencyId}
        >
            {
                currencies.map(currency => (
                    <MenuItem value={currency.code} key={currency.id}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                                <img src={ currency.flagImgUrl } style={{ width: 30, height: 20 }}/>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Typography variant="h6" fontWeight={600}>{ currency.code }</Typography>
                                { hasLabel && <Typography variant="subtitle1">{ currency.label }</Typography> }
                            </Box>
                        </Box>
                    </MenuItem>
                ))
            }
        </Select>
    )
}

export default CurrencySelector;