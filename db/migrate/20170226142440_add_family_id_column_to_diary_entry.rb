class AddFamilyIdColumnToDiaryEntry < ActiveRecord::Migration[5.0]
  def change
    add_reference :diary_entries, :family, foreign_key: true, index: true, null: false
  end
end
