class CreateFamilies < ActiveRecord::Migration[5.0]
  def change
    create_table :families do |t|
      t.string :slug, index: { unique: true }, null: false

      t.timestamps
    end
  end
end
