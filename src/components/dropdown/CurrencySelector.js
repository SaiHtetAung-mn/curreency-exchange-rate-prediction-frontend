import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { useMetaData } from "../../features/meta_data";

/**
 * ##CurrencySelector
 * @param {Object} props 
 * @param {Boolean} props.fullWidth
 * @param {Boolean} props.hasLabel
 * @param {Boolean} props.hasFlag
 * @param {Boolean} props.hideBorder
 * @param {String} props.placeholder
 * @param {Event} props.onChange
 * @param {("MMK"|"USD")} props.defaultCurrency
 * @returns 
 */
function CurrencySelector(props) {
    const { currencies } = useMetaData();
    const { 
        defaultCurrency=null, 
        fullWidth=false, 
        hasLabel=false, 
        hasFlag=false,
        hideBorder=false,
        placeholder="",
        onChange 
    } = props;
    const defaultCurrencyId = currencies.filter(c => c.code == defaultCurrency)[0]?.code || null;
    const [val, setVal] = React.useState(defaultCurrencyId);

    function handleOnChange(e) {
        const value = e.target.value;
        setVal(value);
        onChange(value);
    }

    React.useEffect(() => {
        defaultCurrencyId && onChange(defaultCurrencyId);
    }, []);

    return(
        <FormControl fullWidth={fullWidth}>
            <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
            <Select
                fullWidth={fullWidth}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={placeholder}
                value={val}
                size={val ? "small" : undefined}
                onChange={handleOnChange}
                defaultValue={defaultCurrencyId}
                sx={hideBorder && { "& fieldset": { border: "none" } }}
                displayEmpty
            >
                {
                    currencies.map(currency => (
                        <MenuItem value={currency.code} key={currency.id}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                                { hasFlag && <img src={ currency.flagImgUrl } style={{ width: 30, height: 20, margin: 0 }}/> }
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Typography variant="h6" fontWeight={600}>{ currency.code }</Typography>
                                    { hasLabel && <Typography variant="body2">{ currency.name }</Typography> }
                                </Box>
                            </Box>
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}

export default CurrencySelector;