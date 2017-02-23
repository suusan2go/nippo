class CreateFamilyMemberships < ActiveRecord::Migration[5.0]
  def change
    create_table :family_memberships do |t|
      t.references :user, foreign_key: true, index: { unique: true }, null: false
      t.references :family, foreign_key: true, index: { unique: true }, null: false

      t.timestamps
    end
    add_index :family_memberships, [:user_id, :family_id], unique: true
  end
end
