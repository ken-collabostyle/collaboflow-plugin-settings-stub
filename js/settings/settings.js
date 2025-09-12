import { collaboflowPlugin } from "./plugin-settings-stub.js";

(function(){
  // スタブに保存されているダミープラグイン変数の読み込み
  const getConfig = async function(){
    try{
      // 版の選択値を取得
      const version = parseInt(document.getElementById("form-version").value, 10);
      const setting = await collaboflowPlugin.getSettings(version);
      console.log(setting, "response");
      if (setting && setting.message) {
        document.getElementById("input-text").value = setting.message;
      } else {
        document.getElementById("input-text").value = "";
      }
    } catch(error){
      console.error('設定取得エラー:', error);
    }
  }

  // テキストエリアに入力された文字をスタブのプラグイン変数に保存
  const setConfig = async function(){ 
    try{
      const message = document.getElementById("input-text").value;
      const version = parseInt(document.getElementById("form-version").value, 10);
      const response = await collaboflowPlugin.saveSettings({message: message}, version);
      if (response.success) {
        alert("設定を保存しました");
      }
      console.log(response);
    } catch(error){
      console.error('設定保存エラー:', error)
    }
  }

  // スタブを利用したフォームパーツ情報の取得
  const getFormItems = async function() {
    try {
      const response = await collaboflowPlugin.getFormItems();
      console.log(response, "response");
      if (!response) {
        return;
      }
      // フォームパーツ情報をform-partsに反映
      const selectableFormParts = document.getElementById("form-parts");
      for (const [key, item] of Object.entries(response)) {
        //テーブルは除外(itemが配列の場合)
        if (Array.isArray(item)) {
          continue;
        }
        const option = document.createElement("option");
        option.value = key;
        option.textContent = item.name;
        selectableFormParts.appendChild(option);
      }
    } catch (error) {
      console.error('フォームパーツ情報取得エラー:', error);
    }
  };

  getFormItems();
  document.getElementById("get-button").addEventListener("click", getConfig);
  document.getElementById("save-button").addEventListener("click", setConfig);

  // add-buttonクリック時にform-partsで選択されたパーツ名称をinput-textに挿入
  document.getElementById("add-button").addEventListener("click", function() {
    const select = document.getElementById("form-parts");
    const selectedOption = select.options[select.selectedIndex];
    if (selectedOption) {
      const textarea = document.getElementById("input-text");
      // 末尾に追加（改行して追加）
      if (textarea.value && !textarea.value.endsWith("\n")) {
        textarea.value += "\n";
      }
      textarea.value += selectedOption.textContent;
    }
  });
})()