// src/components/Home.tsx

import React, { useMemo } from 'react';
import './Home.css';
import { COMUNIDADES_AUTONOMAS } from '../apis/fuelApiLib';

const FUEL_TYPES = [
  { key: 'Precio Gasoleo A', label: 'Gasóleo A' },
  { key: 'Precio Gasolina 95 E5', label: 'Gasolina 95 E5' },
];

/**
 * Calcula el valor medio de un vector de valores formateados como string
 */
function getAverage(values: string[]): string | null {
  const nums = values
    .map(p => parseFloat(p.replace(',', '.')))  // convertir a número
    .filter(n => !isNaN(n));                    // eliminar valores inválidos
  if (nums.length === 0) return null;
  return (nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(3);
}

interface Station {
  [key: string]: any;
}

interface HomeProps {
  stations: Station[];
}

const Home: React.FC<HomeProps> = ({ stations }) => {
  // 1) Resumen nacional: medias por tipo de combustible
  const nationalSummary = useMemo(() => {
    return FUEL_TYPES
      .map(fuel => {
        const prices = stations.map(s => s[fuel.key]);
        const avg = getAverage(prices);
        return { ...fuel, avg };
      })
      .sort((a, b) =>
        a.avg && b.avg ? parseFloat(b.avg) - parseFloat(a.avg) : 0
      );
  }, [stations]);

  // 2) Resumen por comunidad autónoma
  const regionSummary = useMemo(() => {
    return COMUNIDADES_AUTONOMAS.map(region => {
      const regionName = region.name;
      const regionStations = stations.filter(
        s => s['IDCCAA'] === region.id
      );
      const fuelPrices = FUEL_TYPES.map(fuel => {
        const prices = regionStations.map(s => s[fuel.key]);
        const avg = getAverage(prices);
        return { ...fuel, avg };
      });
      return { regionName, fuelPrices };
    });
  }, [stations]);

  return (
    <div className="home-container">
      {/* 1) Título principal */}
      <h1>Buscasofa</h1>

      {/* 2) Descripción de la aplicación */}
      <p className="description">El mejor buscador de precios de combustible de España.</p>

      {/* 3) Sección: Resumen nacional de precios */}
      <section>
        <h2 className="resumen-nacional">Resumen nacional de precios</h2>
        <table id="national-prices" className="resumen-nacional">
          <thead>
            <tr>
              <th>Tipo de combustible</th>
              <th>Precio medio (€)</th>
            </tr>
          </thead>
          <tbody>
            {nationalSummary.map(fuel => (
              <tr key={fuel.key}>
                <td>{fuel.label}</td>
                <td>{fuel.avg ?? 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 4) Sección: Resumen por comunidad autónoma */}
      <section>
        <h2 className="resumen-comunidades">Resumen por comunidad autónoma</h2>
        <table id="regional-prices" className="resumen-comunidades">
          <thead>
            <tr>
              <th>Comunidad Autónoma</th>
              {FUEL_TYPES.map(fuel => (
                <th key={fuel.key}>{fuel.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {regionSummary.map(region => (
              <tr key={region.regionName}>
                <td>{region.regionName}</td>
                {region.fuelPrices.map(fuel => (
                  <td key={fuel.key}>{fuel.avg ?? 'N/A'}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Home;