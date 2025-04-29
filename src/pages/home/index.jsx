import { FaCat } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

// const CatIcon = styled(FaCat)`
//     color: orange;
//     position: absolute;
//     left: 20px;
//     /* font-size: 200px; */
//     width: 100px;
//     height: 100px;
// `;

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* <CatIcon /> */}
      <FaCat size={200} style={{ color: 'gray' }} />
      <div>This is homepage</div>
      <button onClick={() => navigate('/projects')}>Click Me</button>
    </>
  );
}
