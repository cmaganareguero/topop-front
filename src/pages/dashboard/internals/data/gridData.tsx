import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { GridCellParams, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

type SparkLineData = number[];

function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString('en-US', {
    month: 'short',
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

function renderSparklineCell(params: GridCellParams<SparkLineData, any>) {
  const data = getDaysInMonth(4, 2024);
  const { value, colDef } = params;

  if (!value || value.length === 0) {
    return null;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <SparkLineChart
        data={value}
        width={colDef.computedWidth || 100}
        height={32}
        plotType="bar"
        showHighlight
        showTooltip
        colors={['hsl(210, 98%, 42%)']}
        xAxis={{
          scaleType: 'band',
          data,
        }}
      />
    </div>
  );
}

function renderStatus(status: 'Online' | 'Offline') {
  const colors: { [index: string]: 'success' | 'default' } = {
    Online: 'success',
    Offline: 'default',
  };

  return <Chip label={status} color={colors[status]} size="small" />;
}

export function renderAvatar(
  params: GridCellParams<{ name: string; color: string }, any, any>,
) {
  if (params.value == null) {
    return '';
  }

  return (
    <Avatar
      sx={{
        backgroundColor: params.value.color,
        width: '24px',
        height: '24px',
        fontSize: '0.85rem',
      }}
    >
      {params.value.name.toUpperCase().substring(0, 1)}
    </Avatar>
  );
}

export const columns: GridColDef[] = [
  {
    field: 'pageTitle',
    headerName: 'Nombre',
    flex: 2, // Mayor flex para la columna 'Nombre'
    minWidth: 250, // Asegura que el nombre tenga suficiente espacio
  },
  {
    field: 'eventCount',
    headerName: 'Anime',
    headerAlign: 'center', // Centrado para una mejor estética
    align: 'center',
    flex: 1.5, // Ajustado para un buen balance visual
    minWidth: 150,
  },
  {
    field: 'viewsPerUser',
    headerName: 'Nota',
    headerAlign: 'center',
    align: 'center',
    flex: 0.8, // Ajustado para que ocupe menos espacio
    minWidth: 120,
    renderCell: (params) => <span>{params.value.toFixed(1)}</span>, // Para mostrar una nota con decimales
    // Agregar 'paddingRight' para pegado a la derecha
    cellClassName: 'right-aligned-cell', 
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 0.5, // Menor flex para la columna 'Status'
    minWidth: 100,
    renderCell: (params) => renderStatus(params.value as any),
    // Asegurar que la columna 'estatus' ocupe solo el espacio necesario
    cellClassName: 'right-aligned-cell',
  },
];



export const rows: GridRowsProp = [
  {
    id: 1,
    pageTitle: 'Naruto Shippuden',
    status: 'Online',
    eventCount: 500, // Número de episodios de anime
    viewsPerUser: 9.2, // Calificación promedio
  },
  {
    id: 2,
    pageTitle: 'One Piece',
    status: 'Online',
    eventCount: 1000, // Número de episodios
    viewsPerUser: 8.5,
  },
  {
    id: 3,
    pageTitle: 'Attack on Titan',
    status: 'Offline',
    eventCount: 75, // Episodios de la serie
    viewsPerUser: 9.7,
  },
  {
    id: 4,
    pageTitle: 'Fullmetal Alchemist: Brotherhood',
    status: 'Online',
    eventCount: 64, // Episodios
    viewsPerUser: 10.0,
  },
  {
    id: 5,
    pageTitle: 'Demon Slayer',
    status: 'Offline',
    eventCount: 50, // Episodios
    viewsPerUser: 8.8,
  },
  {
    id: 6,
    pageTitle: 'My Hero Academia',
    status: 'Online',
    eventCount: 80,
    viewsPerUser: 8.9,
  },
  {
    id: 7,
    pageTitle: 'Dragon Ball Z',
    status: 'Offline',
    eventCount: 291, // Episodios
    viewsPerUser: 7.6,
  },
  {
    id: 8,
    pageTitle: 'Death Note',
    status: 'Online',
    eventCount: 37, // Episodios
    viewsPerUser: 9.5,
  },
  {
    id: 9,
    pageTitle: 'Neon Genesis Evangelion',
    status: 'Offline',
    eventCount: 26, // Episodios
    viewsPerUser: 9.0,
  },
  {
    id: 10,
    pageTitle: 'Sword Art Online',
    status: 'Online',
    eventCount: 98, // Episodios
    viewsPerUser: 8.0,
  },
];

