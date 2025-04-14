import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
// Chart Options Type Interface
import {
    AgBarSeriesOptions,
    AgCategoryAxisOptions,
    AgChartCaptionOptions,
    AgChartLegendOptions,
    AgChartOptions,
    AgChartSubtitleOptions,
    AgLineSeriesOptions,
    AgNumberAxisOptions, } from 'ag-charts-community';

export interface IData {
    month: string
    avgPrice: number,
    highPrice: number
}

@Component({
  selector: 'app-ag-charts',
  imports: [AgCharts],
  templateUrl: './ag-charts.component.html',
  styleUrl: './ag-charts.component.css'
})
export class AgChartsComponent {
    public options: AgChartOptions;

  constructor() {
    this.options = {
      // Chart Title
      title: { text: "Tesla Shares" } as AgChartCaptionOptions,
      // Chart Subtitle
      subtitle: { text: "Data from November 2024 till now" } as AgChartSubtitleOptions,
      // Data: Data to be displayed within the chart
        data: [
            { month: "Nov", avgPrice: 285.77, highPrice: 304.95 },
            { month: "Dec", avgPrice: 294.26, highPrice: 306.88 },
            { month: "Jan", avgPrice: 286.82, highPrice: 305.75 },
            { month: "Feb", avgPrice: 270.41, highPrice: 282.90 },
            { month: "Mar", avgPrice: 282.90, highPrice: 259.87 },
            { month: "Apr", avgPrice: 295.04, highPrice: 273.94 }
      ] as IData[],
      // Series: Defines which chart type and data to use
      series: [
        {
          type: "bar",
          xKey: "month",
          yKey: "highPrice",
          yName: "High Price",
        } as AgBarSeriesOptions,
        { type: "line", xKey: "month", yKey: "avgPrice" } as AgLineSeriesOptions,
        ],

      // Axes: Configure the axes for the chart
      axes: [
        // Display category (xKey) as the bottom axis
        {
          type: "category",
          position: "bottom",
        } as AgCategoryAxisOptions,
        // Use left axis for 'iceCreamSales' series
        {
          type: "number",
          position: "left",
          keys: ["avgPrice"],
        } as AgNumberAxisOptions,
        // Use right axis for 'avgTemp' series
        {
          type: "number",
          position: "right",
          keys: ["highPrice"],
        } as AgNumberAxisOptions,
      ],
      // Legend: Matches visual elements to their corresponding series or data categories.
      legend: {
        position: "bottom",
      } as AgChartLegendOptions,
    };
  }
}
