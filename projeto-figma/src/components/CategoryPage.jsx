// src/components/CategoryPage.jsx
import React, { useState } from 'react';
import { Layout, Input, Tabs, Space, Tag, Row, Col, Grid } from 'antd';
import { useParams } from 'react-router-dom';
import MainHeader from './MainHeader';
import FundCard from './FundCard';
import { FUNDS } from '../data/funds';
import { slugify } from '../utils/slugify';

const { Content } = Layout;
const { Search } = Input;
const { TabPane } = Tabs;
const { useBreakpoint } = Grid;

export default function CategoryPage() {
  const screens = useBreakpoint();
  const isMobile = !screens.sm;
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('abertos');

  // get the “slug” from the URL, e.g. "fundos-de-investimento" or "renda-fixa"
  const { slug } = useParams();

  // rebuild a nice title from the slug
  const title = slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());

  // helper: pick the bit before "|" as the fund’s primary category
  const getPrimaryCat = (fund) =>
    fund.category.split('|')[0].trim();

  // now filter FUNDS by page slug:
  const byCategory = slug === 'fundos-de-investimento'
    ? FUNDS
    : FUNDS.filter(f => slugify(getPrimaryCat(f)) === slug);

  // then apply search‐in‐name
  const displayedFunds = byCategory.filter(f =>
    f.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <MainHeader
        title={title}
        subtitle="Explore nossa seleção de fundos para investir com segurança e boa rentabilidade."
      />

      <Content style={{ padding: isMobile ? 8 : 16 }}>
        <Search
          placeholder="Buscar"
          allowClear
          onSearch={setSearchText}
          style={{ marginBottom: 16, borderRadius: 4 }}
        />

        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          style={{ marginBottom: 16 }}
        >
          <TabPane tab="Fundos abertos" key="abertos" />
          <TabPane tab="Fundos fechados" key="fechados" />
        </Tabs>

        <Space wrap style={{ marginBottom: 16 }}>
          {['Em carteira','Favoritos','Top Funds','Alocação'].map(tag => (
            <Tag
              key={tag}
              style={{ cursor: 'pointer', borderRadius: 4 }}
              onClick={() => console.log('filtrar por', tag)}
            >
              {tag}
            </Tag>
          ))}
        </Space>

        <Row gutter={[16, 16]}>
          {displayedFunds.length
            ? displayedFunds.map(fund => (
                <Col xs={24} sm={12} lg={8} key={fund.id}>
                  <FundCard fund={fund} />
                </Col>
              ))
            : <p>Nenhum fundo encontrado nesta categoria.</p>
          }
        </Row>
      </Content>
    </Layout>
  );
}
