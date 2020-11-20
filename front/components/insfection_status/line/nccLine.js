import {Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

const NccLine = (data, getItemStatus) => {
    return (
        <>
            {
                getItemStatus.getItemStatus !== false ?
                    <LineChart width={1200} height={400} data={data.data[0]}
                               margin={{top: 30, right: 3, left: 3, bottom: 10}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey='date'/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Line type="monotone" dataKey="일일_확진자_수" stroke="#424242"/>
                    </LineChart> : <p>wait...</p>
            }
        </>
    )
}

export default NccLine;