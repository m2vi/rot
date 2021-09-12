import Head from 'next/head';
import { Inner, Textarea, TextareaTop, Wrapper } from '../components/styles';
import { IoArrowDownOutline } from 'react-icons/io5';
import { ChangeEvent, useEffect, useState } from 'react';
import { rot, toMap } from '../utils/rot';
import copyToClipboard from 'copy-to-clipboard';

const Home = () => {
  const [input, setInput] = useState('');
  const [i, setI] = useState('13');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setI(e.target.value);
  };

  const copy = () => {
    copyToClipboard(rot(input, parseInt(i)));
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
          <IoArrowDownOutline className='m-bottom-7 icon' />
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
          <IoArrowDownOutline className='m-top-7 icon' />
          <div style={{ position: 'relative', width: '100%' }}>
            <TextareaTop onClick={copy} />
            <Textarea
              value={rot(input, parseInt(i))}
              placeholder='Output'
              className='m-top-7 noselect'
              disabled
              unselectable='on'
              readOnly={true}
            />
          </div>
        </Inner>
      </Wrapper>
    </>
  );
};

export default Home;
