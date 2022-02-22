import React from 'react';
import DashBoardWrapper, { DashBoardWrapperMain, DashBoardWrapperRight } from '../components/dashboard-wrapper/DashBoardWrapper';
import { data } from '../constants/data';
import colors from '../constants/colors';
import Box from '../components/box/Box'
import { Bar } from 'react-chartjs-2'
import RevenueList from '../components/revenue-list/RevenueList';
import OverrallList from '../components/overall/OverallList'
import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox'
import {
  Chart as ChartJS, CategoryScale, LinearScale,
  PointElement, BarElement, Title, Tooltip, Legend
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale,
  PointElement, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  return (
    <DashBoardWrapper>
      <DashBoardWrapperMain>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-12">
              <div className='row'>
                {
                  data.summary.map((item, index) => {
                    return (
                      <div key={`summary-${index}`} id='mb' className="col-xl-6 col-md-6 col-sm-12 ">
                        <SummaryBox item={item} />
                      </div>

                    )
                  })
                }
              </div>

            </div>
            <div className="col-xl-4 hide-md  hide-sm">
              <SummaryBoxSpecial item={data.revenueSummary} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 ">
              <Box>
                <RevenueByMonthsChart />
              </Box>
            </div>
          </div>
        </div>
      </DashBoardWrapperMain>
      <DashBoardWrapperRight>
    
          <div className='title' id='mb'>Overrall</div>
          <div id='mb'>
                  <OverrallList/>
          </div>  
          <div className='title' id='mb'>Revenue by channel</div>
          <div id='mb'>
            <RevenueList/>
          </div>
 
      </DashBoardWrapperRight>
    </DashBoardWrapper>
  )
}
export default Dashboard;
const RevenueByMonthsChart = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false,
        }
      },
      yAxes: {
        grid: {
          display: false,
          drawBorder: false,
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      }
    },
    elements: {
      bar: {
        backgroundColor: colors.red,
        borderRadius: 20,
        borderSkipped: 'bottom'
      }
    }
  }
  const chartData = {
    labels: data.revenueByMonths.labels,
    datasets: [
      {
        label: 'Revenue',
        data: data.revenueByMonths.data
      }
    ]
  }
  return (
    <>
      <div className="title">
        RevenueByMonthsChart
      </div>
      <div>
        <Bar options={chartOptions} data={chartData} height={`300px`} />
      </div>
    </>
  )
}
