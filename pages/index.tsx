import Head from 'next/head';
import {
  Inner,
  SelectWrapper,
  Textarea,
  TextareaTop,
  TextareaTopWrapper,
  ToastText,
  Wrapper,
} from '../components/styles';
import { IoArrowDownOutline, IoClose, IoCloseOutline } from 'react-icons/io5';
import { ChangeEvent, useState } from 'react';
import { rot, toMap } from '../utils/rot';
import copyToClipboard from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import Favicon from '../components/Favicon';
import Select from '../components/Select';

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
    toast.info(<ToastText>Copied to clipboard</ToastText>, {
      position: 'top-right',
      autoClose: 4500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: false,
      closeButton: (props) => (
        <IoClose className='text-primary-300' {...props} />
      ),
    });
  };

  return (
    <>
      <Head>
        <title>ROT</title>
        <Favicon />
      </Head>
      <Wrapper>
        <Inner>
          <Textarea
            placeholder='Input'
            className='mb-4'
            onChange={handleChange}
          />
          <IoArrowDownOutline className='mb-4 icon' />
          <SelectWrapper>
            <Select array={toMap} onChange={handleSelectChange} />
          </SelectWrapper>
          <IoArrowDownOutline className='mt-4 icon' />
          <TextareaTopWrapper>
            <TextareaTop onClick={copy} />
            <Textarea
              value={rot(input, parseInt(i))}
              placeholder='Output'
              className='mt-4 noselect'
              disabled
              unselectable='on'
              readOnly={true}
            />
          </TextareaTopWrapper>
        </Inner>
      </Wrapper>
    </>
  );
};

export default Home;
