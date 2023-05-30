import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import TablePagination, {
  tablePaginationClasses as classes,
} from '@mui/base/TablePagination';
import { IDinos } from '../interfaces/IDinos';
import { deleteDino, getDinosaurios, newDino } from '../firebase/FBdinos';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function UnstyledTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [dinosaurios, setDinosaurios] = useState<IDinos[]>([]);
  useEffect(() => {
    getDinosaurios().then((res) => {
      console.log(...res);
      setDinosaurios([...res]);
    });
  }, []);

  const handleDeleteDino = (codigo: string | undefined) => {
    const confirmDelete = window.confirm('¿Estás seguro de borrar este dinosaurio?');
    if (confirmDelete && codigo) {
      deleteDino(codigo);
    }
  };
  

  return (
    <Root>
      <TableContainer>
        <Table aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell>
                <h3>Dinosaurio</h3>
              </TableCell>
              <TableCell>
                <h3>Categoría</h3>
              </TableCell>
              <TableCell>
                <h3>Salud</h3>
              </TableCell>
              <TableCell>
                <h3>Stamina</h3>
              </TableCell>
              <TableCell>
                <h3>Oxigeno</h3>
              </TableCell>
              <TableCell>
                <h3>Daño</h3>
              </TableCell>
              <TableCell>
                <h3>Comida</h3>
              </TableCell>
              <TableCell>
                <h3>Torpor</h3>
              </TableCell>
              <TableCell>
                <h3>Velocidad</h3>
              </TableCell>
              <TableCell>
                <h3>Borrar</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? dinosaurios.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage,
                )
              : dinosaurios
            ).map((dino) => (
              <TableRow key={dino.dinoname}>
                <TableCell>{dino.dinoname}</TableCell>
                <TableCell align="left">{dino.categoria}</TableCell>
                <TableCell align="left">{dino.salud}</TableCell>
                <TableCell align="left">{dino.stamina}</TableCell>
                <TableCell align="left">{dino.oxigeno}</TableCell>
                <TableCell align="left">{dino.daño}</TableCell>
                <TableCell align="left">{dino.food}</TableCell>
                <TableCell align="left">{dino.torpor}</TableCell>
                <TableCell align="left">{dino.velocidad}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleDeleteDino(dino.codigo)}
                    id="deletebtn2"
                    endIcon={<FontAwesomeIcon icon={faTrash} />}
                  ></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomTablePagination
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        colSpan={12}
        count={dinosaurios.length}
        rowsPerPage={rowsPerPage}
        page={page}
        slotProps={{
          select: {
            'aria-label': '',
          },
          actions: {
            showFirstButton: true,
            showLastButton: true,
          },
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Root>
  );
}

// Estilos

const Root = styled('div')({
  maxWidth: '100%',
  overflowX: 'auto', // Permitir desplazamiento horizontal si el contenido se desborda
});

const TableContainer = styled('div')({
  maxWidth: '100%',
  overflowY: 'auto', // Permitir desplazamiento vertical si el contenido se desborda
});

const Table = styled('table')(({ theme }) => ({
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontSize: '0.875rem',
  borderCollapse: 'collapse',
  width: '100%',
}));

const TableHead = styled('thead')(({ theme }) => ({}));

const TableBody = styled('tbody')(({ theme }) => ({}));

const TableRow = styled('tr')(({ theme }) => ({}));

const TableCell = styled('td')(({ theme }) => ({
  textAlign: 'left',
  padding: '6px',
}));

const CustomTablePagination = styled(TablePagination)(({ theme }) => ({
  '& .${classes.spacer}': {
    display: 'none',
  },

  '& .${classes.toolbar}': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px',

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },

  '& .${classes.selectLabel}': {
    margin: 0,
  },

  '& .${classes.select}': {
    padding: '2px',
    borderRadius: '50px',
    backgroundColor: 'transparent',

    '&:hover': {},

    '&:focus': {},
  },

  '& .${classes.displayedRows}': {
    margin: 0,

    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
    },
  },

  '& .${classes.actions}': {
    padding: '2px',
    borderRadius: '50px',
    textAlign: 'center',
  },

  '& .${classes.actions} > button': {
    margin: '0 8px',
    border: 'transparent',
    borderRadius: '2px',
    backgroundColor: 'transparent',

    '&:hover': {},

    '&:focus': {},
  },
}));
