// src/components/AssetListPage.jsx
import React from 'react';
import { Layout, List, Button, Typography, Space, Grid } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { slugify } from '../utils/slugify';
import btgLogo from '../assets/btg-logo.png';

const { Header, Content } = Layout;
const { useBreakpoint } = Grid;

const categories = [
  'Fundos de Investimento',
  'Renda Fixa',
  'Renda Variável',
  'Previdência',
  'COE',
  'Ofertas Públicas…',
  'Câmbio',
  'Criptoativos',
];

export default function AssetListPage() {
  const screens = useBreakpoint();
  const isMobile = !screens.sm;
  const nav = useNavigate();

  const data = [
    { type: 'header' },
    ...categories.map(label => ({ type: 'item', label })),
    { type: 'action', label: 'Excluir todas as categorias' },
  ];

  const handleItemClick = (label) => {
    const slug = slugify(label);
    nav(`/categoria/${slug}`);
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Header
        style={{
          background: '#fff',
          padding: isMobile ? '0 8px' : '0 16px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
        }}
      >
        <Space onClick={() => nav(-1)} style={{ cursor: 'pointer' }}>
          <LeftOutlined style={{ fontSize: isMobile ? 16 : 18 }} />
          <Typography.Text strong style={{ fontSize: isMobile ? 16 : 18 }}>
            BTG Investimentos
          </Typography.Text>
        </Space>
      </Header>

      <Content style={{ margin: isMobile ? 8 : 16 }}>
        <div
          style={{
            width: '100%',
            maxWidth: 600,
            margin: '0 auto',
            borderRadius: 8,
            background: '#fff',
            boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
          }}
        >
          <List
            dataSource={data}
            split={false}
            renderItem={(item, idx) => {
              if (item.type === 'header') {
                return (
                  <List.Item
                    style={{
                      padding: isMobile ? '10px 12px' : '12px 16px',
                      borderBottom: '1px solid #f0f0f0',
                    }}
                  >
                    <List.Item.Meta
                      avatar={<img src={btgLogo} alt="BTG" width={24} />}
                      title={
                        <Typography.Text strong style={{ fontSize: 16 }}>
                          Lista de Ativos
                        </Typography.Text>
                      }
                    />
                  </List.Item>
                );
              }

              if (item.type === 'item') {
                return (
                  <List.Item
                    style={{
                      padding: isMobile ? '10px 12px' : '12px 16px',
                      borderBottom:
                        idx < data.length - 2 ? '1px solid #f0f0f0' : undefined,
                      cursor: 'pointer',
                    }}
                    onClick={() => handleItemClick(item.label)}
                  >
                    <Typography.Text style={{ fontSize: isMobile ? 14 : 16 }}>
                      {item.label}
                    </Typography.Text>
                  </List.Item>
                );
              }

              return (
                <List.Item style={{ padding: isMobile ? '10px 12px' : '12px 16px' }}>
                  <Button
                    type="text"
                    danger
                    style={{
                      padding: 0,
                      height: 'auto',
                      fontSize: isMobile ? 14 : 16,
                    }}
                    onClick={() => console.log('excluir todas')}
                  >
                    {item.label}
                  </Button>
                </List.Item>
              );
            }}
          />
        </div>
      </Content>
    </Layout>
  );
}
