import React, { Component } from 'react';
import text1 from '../Texts/text1.txt';
import text2 from '../Texts/text2.txt';
import text3 from '../Texts/text3.txt';
import text4 from '../Texts/text4.txt';
import text5 from '../Texts/text5.txt';
import text6 from '../Texts/text6.txt';
import text7 from '../Texts/text7.txt';
import text8 from '../Texts/text8.txt';
import text9 from '../Texts/text9.txt';
import text10 from '../Texts/text10.txt';
import text11 from '../Texts/text11.txt';
import text12 from '../Texts/text12.txt';
import text13 from '../Texts/text13.txt';
import text14 from '../Texts/text14.txt';
import text15 from '../Texts/text15.txt';
import text16 from '../Texts/text16.txt';
import text17 from '../Texts/text17.txt';

class TextRotator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: [],       // 로드한 모든 텍스트를 저장
      currentText: '', // 현재 표시 중인 텍스트
      currentIndex: 0, // 현재 텍스트의 인덱스
    };
    
    this.intervalId = null; // setInterval을 제어하기 위한 아이디
  }

  componentDidMount() {
    // 컴포넌트가 마운트되면 텍스트를 불러오고 순환을 시작
    this.loadTexts();
  }

  componentWillUnmount() {
    // 언마운트 시점에 setInterval 정리
    clearInterval(this.intervalId);
  }

  // 여러 개의 텍스트 파일을 비동기적으로 불러오는 함수
  loadTexts = async () => {
    try {
      // fetch를 통해 파일 내용을 받아오고, Promise.all로 병렬 처리
      const fetchedTexts = await Promise.all([
        fetch(text1).then(response => response.text()),
        fetch(text2).then(response => response.text()),
        fetch(text3).then(response => response.text()),
        fetch(text4).then(response => response.text()),
        fetch(text5).then(response => response.text()),
        fetch(text6).then(response => response.text()),
        fetch(text7).then(response => response.text()),
        fetch(text8).then(response => response.text()),
        fetch(text9).then(response => response.text()),
        fetch(text10).then(response => response.text()),
        fetch(text11).then(response => response.text()),
        fetch(text12).then(response => response.text()),
        fetch(text13).then(response => response.text()),
        fetch(text14).then(response => response.text()),
        fetch(text15).then(response => response.text()),
        fetch(text16).then(response => response.text()),
        fetch(text17).then(response => response.text()),
      ]);

      // texts를 state에 저장하고, 첫 텍스트부터 순환 시작
      this.setState({ texts: fetchedTexts, currentText: fetchedTexts[0] }, () => {
        // 5초마다 rotateText가 호출되도록 interval 설정
        this.intervalId = setInterval(this.rotateText, 1500 + Math.random()*200);
      });
    } catch (error) {
      console.error("텍스트 로드 실패: ", error);
    }
  };

  // 현재 인덱스를 다음 인덱스로 변경하여 텍스트를 순환
  rotateText = () => {
    const { texts, currentIndex } = this.state;
    if (texts.length === 0) return;

    // 다음 인덱스. 마지막에 도달하면 다시 0으로
    const nextIndex = (currentIndex + 1) % texts.length;
    this.setState({
      currentIndex: nextIndex,
      currentText: texts[nextIndex],
    });
  };

  render() {
    const { currentText } = this.state;

    return (
      <div>
        <p>{currentText}</p>
      </div>
    );
  }
}

export default TextRotator;