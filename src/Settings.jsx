import { useState, useEffect } from 'react';
import { collaboflowPlugin } from '@js/settings/plugin-settings-stub.js';
import './Settings.css';

function Settings() {
  const [version, setVersion] = useState(0);
  const [inputText, setInputText] = useState('');
  const [formParts, setFormParts] = useState([]);
  const [selectedPart, setSelectedPart] = useState('');

  // 初回レンダリング時にフォームパーツを取得
  useEffect(() => {
    const getFormItems = async () => {
      try {
        const items = await collaboflowPlugin.getFormItems();
        if (items) {
          const parts = Object.entries(items)
            .filter(([key, item]) => !Array.isArray(item)) // テーブルを除外
            .map(([key, item]) => ({ value: key, name: item.name }));
          setFormParts(parts);
          if (parts.length > 0) {
            setSelectedPart(parts[0].value); // 初期選択値を設定
          }
        }
      } catch (error) {
        console.error('フォームパーツ情報取得エラー:', error);
      }
    };
    getFormItems();
  }, []);

  // 設定を取得
  const handleGetConfig = async () => {
    try {
      const setting = await collaboflowPlugin.getSettings(version);
      console.log(setting, "response");
      setInputText(setting?.message || '');
    } catch (error) {
      console.error('設定取得エラー:', error);
    }
  };

  // 設定を保存
  const handleSetConfig = async () => {
    try {
      const response = await collaboflowPlugin.saveSettings({ message: inputText }, version);
      if (response.success) {
        alert("設定を保存しました");
      }
      console.log(response);
    } catch (error) {
      console.error('設定保存エラー:', error);
    }
  };
  
  // テキストエリアにパーツ名を追加
  const handleAddPartToText = () => {
    const selectedOption = formParts.find(part => part.value === selectedPart);
    if (selectedOption) {
      setInputText(prevText => {
        const newText = prevText && !prevText.endsWith('\n') ? `${prevText}\n` : prevText;
        return `${newText}${selectedOption.name}`;
      });
    }
  };

  return (
    <>
      <div><h1>プラグイン設定サンプル</h1></div>
      <div className="plugin-editor">
        <div className="plugin-editor__section">
          版選択：
          <select value={version} onChange={(e) => setVersion(parseInt(e.target.value, 10))}>
            <option value="0">すべて</option>
            <option value="1">1版</option>
            <option value="2">2版</option>
          </select>
          <button onClick={handleGetConfig}>取得</button>
          <button onClick={handleSetConfig}>保存</button>
        </div>
        <div className="plugin-editor__section">
          パーツ選択：
          <select value={selectedPart} onChange={(e) => setSelectedPart(e.target.value)}>
            {formParts.map(part => (
              <option key={part.value} value={part.value}>{part.name}</option>
            ))}
          </select>
          <button onClick={handleAddPartToText}>テキストに追加</button>
        </div>
        <div className="plugin-editor__section">
          <textarea 
            value={inputText} 
            onChange={(e) => setInputText(e.target.value)} 
            rows="7" 
            cols="70"
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default Settings;