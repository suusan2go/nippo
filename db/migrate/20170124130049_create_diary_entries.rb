class CreateDiaryEntries < ActiveRecord::Migration[5.0]
  def change
    create_table :diary_entries do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.references :user, foreign_key: true, null: false, index: true

      t.timestamps
    end
  end
end
