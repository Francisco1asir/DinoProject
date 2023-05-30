import { useForm } from 'react-hook-form';
import { Button, Grid, MenuItem, TextField } from '@mui/material';
import { IDinos } from '../interfaces/IDinos';
import { newDino } from '../firebase/FBdinos';

export const AddDino = () => {
    const { register, handleSubmit } = useForm<IDinos>();
    const onAddDinos = async (datadino: IDinos) => {
        await newDino(datadino);
        window.location.reload();
    };
    const currencies = [
        {
            value: 'Terrestre',

        },
        {
            value: 'Volador',

        },
        {
            value: 'Acuático',

        }
    ];
    return (
        <>
            <form onSubmit={handleSubmit(onAddDinos)} noValidate >
                <Grid container >
                    <h1 id='modaltittle'>Add Your Dino!!!</h1>
                    <Grid item xs={12}>
                        <TextField
                            {...register('dinoname')}
                            id="dinoname"
                            label="Dinoname"
                            type="text"
                            variant="filled"
                            sx={{ width: '100%', marginBottom: '12px', backgroundColor: 'white', borderRadius: '7px' }}
                        />
                    </Grid>
                    <Grid item xs={6} md={3} sm={4}>

                        <TextField
                            {...register('salud')}
                            id="salud"
                            label="Salud"
                            variant="filled"
                            type="number"
                            sx={{ width: '100%', marginBottom: '12px', backgroundColor: 'white', borderRadius: '7px' }}
                        />
                    </Grid>
                    <Grid item xs={6} md={3} sm={4}>

                        <TextField
                            {...register('stamina')}
                            id="stamina"
                            label="Stamina"
                            variant="filled"
                            type="number"
                            sx={{ width: '100%', marginBottom: '12px', backgroundColor: 'white', borderRadius: '7px' }}
                        />
                    </Grid>

                    <Grid item xs={6} md={3} sm={4}>

                        <TextField
                            {...register('oxigeno')}
                            id="oxigeno"
                            label="Oxigeno"
                            variant="filled"
                            type="number"
                            sx={{ width: '100%', marginBottom: '12px', backgroundColor: 'white', borderRadius: '7px' }}
                        />
                    </Grid>
                    <Grid item xs={6} md={3} sm={4}>
                        <TextField
                            {...register('peso')}
                            id="peso"
                            label="Peso"
                            type="number"
                            variant="filled"
                            sx={{ width: '100%', marginBottom: '12px', backgroundColor: 'white', borderRadius: '7px' }}
                        />
                    </Grid>

                    <Grid item xs={6} md={3} sm={4}>
                        <TextField
                            {...register('food')}
                            id="food"
                            label="Comida"
                            type="number"
                            variant="filled"
                            sx={{ width: '100%', marginBottom: '12px', backgroundColor: 'white', borderRadius: '7px' }}
                        />
                    </Grid>
                    <Grid item xs={6} md={3} sm={4}>
                        <TextField
                            {...register('daño')}
                            id="daño"
                            label="Daño"
                            variant="filled"
                            type="number"
                            sx={{ width: '100%', marginBottom: '12px', backgroundColor: 'white', borderRadius: '7px' }}
                        />
                    </Grid>

                    <Grid item xs={6} md={3} sm={6}>

                        <TextField
                            {...register('torpor')}
                            id="torpor"
                            label="Torpor"
                            variant="filled"
                            type="number"
                            sx={{ width: '100%', marginBottom: '12px', backgroundColor: 'white', borderRadius: '7px' }}
                        />
                    </Grid>
                    <Grid item xs={6} md={3} sm={6}>

                        <TextField
                            {...register('velocidad')}
                            id="velocidad"
                            label="Velocidad"
                            variant="filled"
                            type="string"
                            sx={{ width: '100%', marginBottom: '12px', backgroundColor: 'white', borderRadius: '7px' }}
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <TextField
                            {...register('descript')}
                            id="descript"
                            label="Descripcion"
                            variant="filled"
                            type="number"
                            sx={{ width: '100%', marginBottom: '12px', backgroundColor: 'white', borderRadius: '7px' }}
                            multiline
                            rows={3} // altura del campo

                        />
                    </Grid>
                    <Grid item xs={8}>

                        <TextField
                            {...register('imagen')}
                            id="imagen"
                            variant="filled"
                            label="Imagen"
                            type="string"
                            placeholder='https://....'
                            sx={{ width: '100%', marginBottom: '12px', backgroundColor: 'white', borderRadius: '7px' }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            {...register('categoria')}
                            id="filled-select-currency"
                            select
                            label="Categoría"
                            // defaultValue="EUR"
                            variant="filled"
                            sx={{ width: '100%', marginBottom: '12px', backgroundColor: 'white', borderRadius: '7px' }}
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value} style={{ backgroundColor: 'white', margin: '0', color: 'black' }}
                                >
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <div className="modalbutton">
                        <Button type="submit" variant="contained" sx={{ marginTop: '10px', position: 'absolute' }}>
                            ADD DINO
                        </Button>
                    </div>
                </Grid>
            </form>
        </>
    );
};

export default AddDino;
