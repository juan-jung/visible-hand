import { Background, BannerTitle } from 'styled';
import styled from 'styled-components';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

export default function MyPageArticleQuizChart({data}) {
    const options = {
        legend: {
            display: true,
            position: "right"
        },
        elements: {
            arc: {
                borderWidth: 10
            }
        }
    };

    const doughnutData = {
    labels: ["금융", "증권", "산업/재계", "중기/벤처", "부동산", "글로벌경제", "생활경제", "일반경제"],
    datasets: [
        {
        label: 'solved ',
        data: data,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(204, 255, 255, 0.9)',
            'rgba(198, 219, 218, 0.9)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(204, 255, 255, 1)',
            'rgba(198, 219, 218, 1)',
          ],
          borderWidth: 0,
        }
    ]
    };

    return (
        <Doughnut options={options} data={doughnutData} style={{width: "120px", maxWidth: "120px", maxHeight: "120px"}}></Doughnut>
    );
}