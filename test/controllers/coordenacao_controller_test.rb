require "test_helper"

class CoordenacaoControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get coordenacao_index_url
    assert_response :success
  end
end
