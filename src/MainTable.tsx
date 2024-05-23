import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { salaryData } from './data';

interface SalaryData {
    year: number;
    totalJobs: number;
    averageSalary: number;
}

const columns: ColumnsType<SalaryData> = [
    {
        title: 'Year',
        dataIndex: 'year',
        key: 'year',
        sorter: (a, b) => a.year - b.year,
    },
    {
        title: 'Number of Total Jobs',
        dataIndex: 'totalJobs',
        key: 'totalJobs',
        sorter: (a, b) => a.totalJobs - b.totalJobs,
    },
    {
        title: 'Average Salary (USD)',
        dataIndex: 'averageSalary',
        key: 'averageSalary',
        sorter: (a, b) => a.averageSalary - b.averageSalary,
    },
];

const MainTable: React.FC = () => {
    return <Table columns={columns} dataSource={salaryData} rowKey="year" />;
};

export default MainTable;
