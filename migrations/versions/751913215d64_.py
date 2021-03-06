"""empty message

Revision ID: 751913215d64
Revises: 1938ed0615d0
Create Date: 2022-05-31 09:36:12.145003

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '751913215d64'
down_revision = '1938ed0615d0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('beer', sa.Column('user_name', sa.String(), nullable=True))
    op.create_foreign_key(None, 'beer', 'user', ['user_name'], ['name'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'beer', type_='foreignkey')
    op.drop_column('beer', 'user_name')
    # ### end Alembic commands ###
