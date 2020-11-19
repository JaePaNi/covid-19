import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";

const ResultNegBar = (data, getItemStatus) => {
    return (
        <>
            {
                getItemStatus.getItemStatus !== false ?
                    <BarChart width={1200} height={400} data={data.data[0]} barSize={35}
                              margin={{top: 30, right: 3, left: 3, bottom: 10}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey='date'/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey="일일_결과음성_수" fill="#424242"/>
                    </BarChart> : <p>wait...</p>
            }
        </>
    )
}

export default ResultNegBar;