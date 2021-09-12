import Head from 'next/head';
import { Inner, Textarea, Wrapper } from '../components/styles';
import { IoArrowDownOutline } from 'react-icons/io5';
import { ChangeEvent, useRef, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { rot, toMap } from '../utils/rot';

const Home = () => {
  const [output, setOutput] = useState('');
  const [i, setI] = useState('13');
  const render = (value: string) => setOutput(rot(value, parseInt(i)));

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    render(e.target.value);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setI(e.target.value);
  };

  return (
    <>
      <Head>
        <title>ROT</title>
      </Head>
      <Wrapper>
        <Inner>
          <Textarea
            placeholder='Input'
            className='m-bottom-7'
            onChange={handleChange}
          />
          <IoArrowDownOutline
            style={{ height: '30px', width: '30px', color: '#fff' }}
            className='m-bottom-7'
          />
          <div style={{ width: '8rem' }}>
            <div className='select'>
              <select onChange={handleSelectChange}>
                {toMap.map((v: number, i: number) => (
                  <option selected={i + 1 === 13} key={i} value={i + 1}>
                    ROT{i + 1}
                  </option>
                ))}
              </select>
              <div className='select_arrow'></div>
            </div>
          </div>
          <IoArrowDownOutline
            style={{ height: '30px', width: '30px', color: '#fff' }}
            className='m-top-7'
          />
          <CopyToClipboard text={output}>
            <Textarea
              value={output}
              placeholder='Output'
              className='m-top-7'
              disabled
            />
          </CopyToClipboard>
        </Inner>
      </Wrapper>
    </>
  );
};

export default Home;
