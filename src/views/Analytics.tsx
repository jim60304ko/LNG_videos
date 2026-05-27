import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, PieChart, Pie, Cell, Legend 
} from 'recharts';
import videoData from '../data/videos.json';
import { Video } from '../types/video';
import './Analytics.css';

const COLORS = ['#FFD700', '#FF8C00', '#FF4500', '#FF1493', '#ADFF2F', '#00CED1'];

function Analytics() {
  const allVideos = videoData as Video[];

  const stats = useMemo(() => {
    // 歷年發片量
    const yearCounts: { [key: string]: number } = {};
    // 分類比例
    const categoryCounts: { [key: string]: number } = {};
    // 前 10 大觀看數
    const topVideos = [...allVideos]
      .sort((a, b) => parseInt(b.viewCount) - parseInt(a.viewCount))
      .slice(0, 10)
      .map(v => ({
        name: v.title.length > 20 ? v.title.substring(0, 20) + '...' : v.title,
        views: parseInt(v.viewCount),
        fullName: v.title
      }));

    allVideos.forEach(v => {
      const year = new Date(v.publishedAt).getFullYear();
      yearCounts[year] = (yearCounts[year] || 0) + 1;
      categoryCounts[v.category] = (categoryCounts[v.category] || 0) + 1;
    });

    const yearlyData = Object.keys(yearCounts).sort().map(year => ({
      year,
      count: yearCounts[year]
    }));

    const categoryData = Object.keys(categoryCounts).map(cat => ({
      name: cat === 'Highlight' ? '精華' : '完整存檔',
      value: categoryCounts[cat]
    }));

    return { yearlyData, categoryData, topVideos, totalVideos: allVideos.length };
  }, [allVideos]);

  return (
    <div className="app analytics-page">
      <Link to="/" className="back-home-btn">🏠 回首頁</Link>
      
      <header>
        <h1>數據儀表板</h1>
        <p>LNG Workshop Channel Insights</p>
      </header>

      <div className="stats-summary">
        <div className="stat-card">
          <h3>總影片數</h3>
          <div className="stat-value">{stats.totalVideos}</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-container line-chart">
          <h3>歷年發片量趨勢</h3>
          <div className="responsive-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={stats.yearlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="year" stroke="#a0a0a0" />
                <YAxis stroke="#a0a0a0" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #FFD700' }}
                  itemStyle={{ color: '#FFD700' }}
                />
                <Line type="monotone" dataKey="count" stroke="#FFD700" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-container pie-chart">
          <h3>影片分類比例</h3>
          <div className="responsive-container">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={stats.categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label
                >
                  {stats.categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                   contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #FFD700' }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-container bar-chart full-width">
          <h3>觀看數 Top 10 影片</h3>
          <div className="responsive-container">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={stats.topVideos} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis type="number" stroke="#a0a0a0" />
                <YAxis dataKey="name" type="category" stroke="#a0a0a0" width={150} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #FFD700' }}
                  formatter={(value: number) => [value.toLocaleString() + ' 次觀看', '觀看數']}
                />
                <Bar dataKey="views" fill="#FFD700" radius={[0, 5, 5, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
