// フォームのダミー情報を保持する定数
const formItemsData = {
    "fidText": {
      "name": "テキスト",
      "type": "text",
      "hint": "テキストパーツのヒントです。",
      "comment": "テキストパーツのコメントです。",
      "required": false,
      "max_length": 20,
      "default": "デフォルトテキストです。",
      "input_format": "half_width",
      "display_format": "half_width_lowercase",
      "display": true,
      "order": 1
    },
    "fidNumberType": {
      "name": "テキストパーツ（数値型）",
      "type": "number",
      "hint": "テキストパーツ（数値型）のヒントです。",
      "comment": "テキストパーツ（数値型）のコメントです。",
      "required": false,
      "max_length": 6,
      "default": 100.5,
      "decimal_place": 2,
      "add_comma": false,
      "input_regulation": {
        "range": {
          "lower_limit": 0,
          "upper_limit": 999999
        }
      },
      "display": true,
      "order": 2
    },
    "fidMoneyType": {
      "name": "テキストパーツ（金額型）",
      "type": "money",
      "hint": "テキストパーツ（金額型）のヒントです。",
      "comment": "テキストパーツ（金額型）のコメントです。",
      "required": false,
      "max_length": 6,
      "default": 100,
      "add_comma": false,
      "input_regulation": {
        "range": {
          "lower_limit": 0,
          "upper_limit": 999999
        }
      },
      "display": true,
      "order": 3
    },
    "fidTextarea": {
      "name": "テキストエリア",
      "type": "textarea",
      "hint": "テキストエリアパーツのヒントです。",
      "comment": "テキストエリアパーツのコメントです。",
      "required": false,
      "default": "デフォルト値",
      "order": 4
    },
    "fidDate": {
      "name": "日付（差分規制）",
      "type": "date",
      "hint": "日付パーツのヒントです。",
      "comment": "日付パーツのコメントです。",
      "required": false,
      "default": "today",
      "order": 5,
      "any_date": "",
      "display_format": "yyyy年mm月dd日",
      "input_regulation": {
        "diff": {
          "target_type": "any_date",
          "target_date": "2021-03-13T15:00:00Z",
          "condition_type": "range",
          "days": 3,
          "ago": true,
          "later": true
        }
      }
    },
    "fidTime": {
      "name": "時刻（範囲規制）",
      "type": "time",
      "hint": "時刻パーツのヒントです。",
      "comment": "時刻パーツのコメントです。",
      "required": false,
      "default": "00:00",
      "order": 6,
      "display_format": "HH時mm分",
      "input_regulation": {
        "range": {
          "lower_limit": "9:00",
          "upper_limit": "18:00"
        }
      }
    },
    "fidNumber": {
      "name": "数値パーツ",
      "type": "number_v2",
      "hint": "数値パーツのヒントです。",
      "comment": "数値パーツのコメントです。",
      "required": false,
      "default": 100.5,
      "order": 7,
      "decimal_place": 2,
      "add_comma": true,
      "input_regulation": {
        "range": {
          "lower_limit": 0,
          "upper_limit": 999999
        }
      },
      "display": true
    },
    "fidList": {
      "name": "リストメニュー",
      "type": "list",
      "hint": "リストメニューパーツのヒントです。",
      "comment": "リストメニューパーツのコメントです。",
      "required": false,
      "default": "",
      "order": 8,
      "default_index": 1,
      "options": [
        {
          "label": "--- 未選択 ---",
          "value": ""
        },
        {
          "label": "商品A",
          "value": "ProductA"
        },
        {
          "label": "商品B",
          "value": "ProductB"
        }
      ]
    },
    "fidCheckbox": {
      "name": "チェックボックス",
      "type": "checkbox",
      "hint": "チェックボックスパーツのヒントです。",
      "comment": "チェックボックスパーツのコメントです。",
      "required": false,
      "default": false,
      "order": 9,
      "checked_comment": "有り",
      "unchecked_comment": "無し"
    },
    "fidRadio": {
      "name": "ラジオボタン",
      "type": "radio",
      "hint": "ラジオボタンパーツのヒントです。",
      "comment": "ラジオボタンパーツのコメントです。",
      "required": false,
      "order": 10,
      "display_index": "",
      "options": [
        {
          "label": "商品A",
          "value": "ProductA"
        },
        {
          "label": "商品B",
          "value": "ProductB"
        },
        {
          "label": "商品C",
          "value": "ProductC"
        }
      ],
      "orientation": "horizontal"
    },
    "fidAttachment": {
      "name": "添付ファイル",
      "type": "attachment",
      "hint": "添付ファイルパーツのヒントです。",
      "comment": "添付ファイルパーツのコメントです。",
      "required": false,
      "order": 11
    },
    "fidImage": {
      "name": "画像",
      "type": "image",
      "hint": "画像パーツのヒントです。",
      "comment": "画像パーツのコメントです。",
      "required": false,
      "order": 12,
      "thumbnail_height": 300,
      "thumbnail_width": 400,
      "size_limit_enabled": true,
      "size_limit_bytes": 5
    },
    "fidLookup": {
      "name": "マスター連携",
      "type": "lookup",
      "hint": "マスター連携パーツのヒントです。",
      "comment": "マスター連携パーツのコメントです。",
      "required": false,
      "order": 13,
      "master_name": "商品マスター",
      "master_type": "kintone",
      "inputtable": true,
      "default": "商品A",
      "search_keys": [
        {
          "code": "item_code",
          "display": true,
          "relation_parts_id": ""
        },
        {
          "code": "item_price",
          "display": true,
          "relation_parts_id": "fidItemPrice"
        }
      ],
      "search_result": {
        "display_columns": [
          "item_name",
          "item_code",
          "item_price"
        ],
        "order_column": "item_price",
        "order": "desc",
        "max_row": 20
      },
      "data_placements": [
        {
          "master_field": "item_name",
          "relation_part_id": "fidText"
        },
        {
          "master_field": "item_code",
          "relation_part_id": "fidNumberType"
        }
      ]
    },
    "fidCalculate": {
      "name": "自動計算",
      "type": "calculate",
      "hint": "自動計算パーツのヒントです。",
      "comment": "自動計算パーツのコメントです。",
      "required": false,
      "order": 14,
      "calc_type": "number",
      "decimal_place": 0,
      "add_comma": true,
      "formula": "fidMoneyType*fidNumberType"
    },
    "fidExcelImport": {
      "name": "Excel添付取込",
      "type": "excelimport",
      "hint": "Excel添付取込パーツのヒントです。",
      "comment": "Excel添付取込パーツのコメントです。",
      "required": false,
      "order": 15,
      "relation": {
        "A2": "fidText",
        "B2": "fidMoneyType",
        "C2": "fidNumberType"
      }
    },
    "fidLabel": {
      "name": "ラベル",
      "type": "label",
      "hint": "ラベルパーツのヒントです。",
      "comment": "ラベルパーツのコメントです。",
      "required": false,
      "order": 16,
      "content": "ラベルパーツの内容です。"
    },
    "tables": [
      {
        "table_index": 1,
        "name": "商品情報",
        "columns": [
          "fidItemCode",
          "fidItemName",
          "fidItemPrice"
        ],
        "max_row": 20,
        "default_row": 5,
        "display_row_number": true,
        "order": 17,
        "parts": {
          "fidItemCode": {
            "name": "商品コード",
            "type": "text",
            "hint": "20桁以内で指定してください。",
            "comment": "ハイフン（-）は省略",
            "required": false,
            "max_length": 20,
            "default": "A0123",
            "input_format": "half_width",
            "display_format": "half_width_lowercase"
          },
          "fidItemName": {
            "name": "商品名",
            "type": "text",
            "hint": "20桁以内で指定してください。",
            "comment": "半角文字不可",
            "required": false,
            "max_length": 20,
            "default": "デフォルトテキストです。",
            "input_format": "full_width",
            "display_format": ""
          },
          "fidItemPrice": {
            "name": "単価",
            "type": "money",
            "hint": "単価を入力してください。",
            "comment": "カンマは自動で入力されます。",
            "required": false,
            "max_length": 7,
            "default": 1,
            "decimal_place": 0,
            "add_comma": true,
            "input_regulation": {
              "range": {
                "lower_limit": 1,
                "upper_limit": 9999999
              }
            }
          }
        }
      }
    ]
};

/**
 * Collaboflowプラグインの設定を管理するオブジェクトです。
 * 設定はlocalStorageに保存されます。
 */
const collaboflowPlugin = {
  _storageKey: 'collaboflow_plugin_settings',

  /**
   * 保存されている設定を取得します。
   * @param {number} [version=0] - 設定を取得するバージョン（配列のインデックス）。
   * @returns {Promise<object>} 保存された設定データを返します。データが存在しない場合は空のオブジェクト {} を返します。
   */
  getSettings: function(version = 0) {
    return new Promise((resolve, reject) => {
      try {
        const storedData = localStorage.getItem(this._storageKey);
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          // 指定されたバージョンの設定データが存在するか確認
          if (parsedData && Array.isArray(parsedData.settings) && parsedData.settings[version]) {
            resolve(parsedData.settings[version].plugin_settings || {});
          } else {
            // 指定されたバージョンに対応するデータがない場合は空のオブジェクトを返す
            resolve({});
          }
        } else {
          // localStorageにデータが保存されていない場合は空のオブジェクトを返す
          resolve({});
        }
      } catch (error) {
        reject(new ErrorHandler('設定の取得に失敗しました。'));
      }
    });
  },

  /**
   * 指定されたJSONデータを設定として保存します。
   * @param {object} jsonData - 保存するJSONデータ。
   * @param {number} [version=0] - 設定を保存するバージョン（配列のインデックス）。
   * @returns {Promise<object>} 保存成功を示すオブジェクトを返します。
   */
  saveSettings: function(jsonData, version = 0) {
    return new Promise(async (resolve, reject) => {
      try {
        // 全体の設定データを取得（localStorageにデータがなくても空の構造で返ってくる）
        const storedResult = await new Promise((res) => {
            try {
                const data = localStorage.getItem(this._storageKey);
                res(data ? JSON.parse(data) : { settings: [] });
            } catch {
                res({ settings: [] });
            }
        });

        // settingsが配列でなければ初期化
        if (!Array.isArray(storedResult.settings)) {
          storedResult.settings = [];
        }
        
        // 指定されたバージョンにデータを格納
        storedResult.settings[version] = {
          plugin_settings: jsonData
        };
        
        // localStorageに文字列として保存
        localStorage.setItem(this._storageKey, JSON.stringify(storedResult));
        
        resolve({ success: true, message: '設定が正常に保存されました。' });
      } catch (error) {
        reject(new ErrorHandler('設定の保存に失敗しました。'));
      }
    });
  },

  /**
   * フォームのアイテム定義を取得します。
   * @returns {Promise<object>} フォームアイテムのJSONデータを返します。
   */
  getFormItems: function() {
    return new Promise((resolve) => {
      // 本来はAPIから取得するなどの非同期処理が入るが、スタブ処理として定数のデータを直接返す
      resolve(formItemsData);
    });
  }

};
// collaboflowPluginをエクスポート
export { collaboflowPlugin };