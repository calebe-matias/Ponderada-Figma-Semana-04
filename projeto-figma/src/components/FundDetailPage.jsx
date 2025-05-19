// src/components/FundDetailPage.jsx
import React from 'react';
import { Layout, Typography } from 'antd';
import { useParams } from 'react-router-dom';
import MainHeader from './MainHeader';
import { FUNDS } from '../data/funds'; // or wherever you export
import { slugify } from '../utils/slugify'; // or wherever you export

export default function FundDetailPage() {
  const { slug } = useParams();
  const fund = FUNDS.find(f => slugify(f.name) === slug);

  if (!fund) {
    return <Typography.Title level={4}>Fundo não encontrado</Typography.Title>;
  }

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <MainHeader title={fund.name} subtitle={fund.category} bg="#fff" color="#000" />

      <Layout.Content style={{ padding: 16 }}>
        <Typography.Paragraph>
          {/* Aqui você joga todas as infos detalhadas do fundo */}
          Aplicação mínima: {fund.min}  
          <br />
          Resgate: {fund.rescue}  
          <br />
          Rentabilidade: {fund.retorno}  
        </Typography.Paragraph>
      </Layout.Content>
    </Layout>
  );
}
