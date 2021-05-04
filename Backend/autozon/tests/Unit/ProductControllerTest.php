<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;

class ProductControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Tests the getAllProducts function
     * @return void
     */
    public function test_getAllProducts()
    {
        // Arrange
        $this->artisan('migrate');
        $this->artisan('db:seed');

        $newLinePattern = "/\r?\n|\r/i";
        $spacePattern = "/\s/i";

        $products = json_encode(array(
            [
                'id' => '1',
                'name' => 'Spoiler',
                'dealer' => '2',
                'manufacturer' => 'APR',
                'price' => '1520.2',
                'streetLegality' => '1',
                'carId' => '1',
                'shortDescription' => 'Dies ist ein Spoiler',
                'category' => 'Spoiler',
                'serialNumber' => '155443345534',
                'preview' => 'prev1',
                'preview2' => 'prev2',
                'preview3' => 'prev3',
                "car" => [
                    "id" => 1,
                    "carBrand" => "VW",
                    "carModelId" => '1',
                    "carModel" => [
                        "id" => 1,
                        "carModel" => "Up",
                        "carModelYear" => '2016',
                        "fuel" => "petrol",
                        "engineNumber" => "1.0L",
                        "vinNumber" => "asdfkjh"
                    ]
                ]
            ], [
                'id' => '2',
                'name' => 'Ölfilter',
                'dealer' => '3',
                'manufacturer' => 'K und N',
                'price' => '15.45',
                'streetLegality' => '1',
                'carId' => '2',
                'shortDescription' => 'Dies ist ein Ölfilter',
                'category' => 'Filter',
                'serialNumber' => '155443345534',
                'preview' => 'prev1',
                'preview2' => 'prev2',
                'preview3' => 'prev3',
                "car" => [
                    "id" => 2,
                    "carBrand" => "Mercedes",
                    "carModelId" => '2',
                    "carModel" => [
                        "id" => 2,
                        "carModel" => "CL300",
                        "carModelYear" => '2005',
                        "fuel" => "petrol",
                        "engineNumber" => "6.0L V8",
                        "vinNumber" => "asdfkjh"
                    ]
                ]
            ], [
                'id' => '3',
                'name' => 'Downpipe',
                'dealer' => '2',
                'manufacturer' => 'Akrapovic',
                'price' => '8053',
                'streetLegality' => '0',
                'carId' => '3',
                'shortDescription' => 'Downpipe / Link pipe set (SS) for stock turbochargers
                DP/L-NI/SS/1',
                'category' => 'Exhaust',
                'serialNumber' => '155443345534',
                'preview' => 'prev1',
                'preview2' => 'prev2',
                'preview3' => 'prev3',
                "car" => [
                    "id" => 3,
                    "carBrand" => "Nissan",
                    "carModelId" => '3',
                    "carModel" => [
                        "id" => 3,
                        "carModel" => "GTR",
                        "carModelYear" => '2020',
                        "fuel" => "petrol",
                        "engineNumber" => "3.6L",
                        "vinNumber" => "asdfkjh"
                    ]
                ]
            ], [
                'id' => '4',
                'name' => 'Reifen',
                'dealer' => '2',
                'manufacturer' => 'Michelin',
                'price' => '59.95',
                'streetLegality' => '1',
                'carId' => '4',
                'shortDescription' => 'Dies sind Reifen für einen Smart for Two',
                'category' => 'Reifen',
                'serialNumber' => '155443345534',
                'preview' => 'prev1',
                'preview2' => 'prev2',
                'preview3' => 'prev3',
                "car" => [
                    "id" => 4,
                    "carBrand" => "Smart",
                    "carModelId" => '4',
                    "carModel" => [
                        "id" => 4,
                        "carModel" => "Smart",
                        "carModelYear" => '2018',
                        "fuel" => "petrol",
                        "engineNumber" => "1.4L",
                        "vinNumber" => "asdfkjh"
                    ]
                ]
            ]
        ));

        $pc = new ProductController;
        // Act
        $result = (string)$pc->getAllProducts();
        // Assert
        $this->assertEquals(
            preg_replace($newLinePattern, preg_replace($spacePattern, $products, ''), ''),
            preg_replace($newLinePattern, preg_replace($spacePattern, $result, ''), '')
        );
        // Reset
        $this->artisan('migrate:rollback');
    }

    /**
     * Tests the productById function
     * @return void
     */
    public function test_productById()
    {
        // Arrange
        $this->artisan('migrate');
        $this->artisan('db:seed');

        $newLinePattern = "/\r?\n|\r/i";
        $spacePattern = "/\s/i";

        $product = json_encode([
            'id' => '1',
            'name' => 'Spoiler',
            'dealer' => '2',
            'manufacturer' => 'APR',
            'price' => '1520.2',
            'streetLegality' => '1',
            'carId' => '1',
            'shortDescription' => 'Dies ist ein Spoiler',
            'category' => 'Spoiler',
            'serialNumber' => '155443345534',
            'preview' => 'prev1',
            'preview2' => 'prev2',
            'preview3' => 'prev3',
            "car" => [
                "id" => 1,
                "carBrand" => "VW",
                "carModelId" => '1',
                "carModel" => [
                    "id" => 1,
                    "carModel" => "Up",
                    "carModelYear" => '2016',
                    "fuel" => "petrol",
                    "engineNumber" => "1.0L",
                    "vinNumber" => "asdfkjh"
                ]
            ]
        ]);

        $pc = new ProductController;
        // Act
        $result = (string)$pc->productById(1);
        // Assert
        $this->assertEquals(
            preg_replace($newLinePattern, preg_replace($spacePattern, $product, ''), ''),
            preg_replace($newLinePattern, preg_replace($spacePattern, $result, ''), '')
        );
        // Reset
        $this->artisan('migrate:rollback');
    }

    /**
     * Tests the createProduct function with an unauthorized user
     * @return void
     */
    public function test_createProduct_withUnauthorizedUser_returns_401()
    {
        // Arrange
        $this->artisan('migrate');
        $this->artisan('db:seed');

        $pc = new ProductController;
        $request = new Request();
        $productToCreate = $request->setJson(json_encode([
            "name" => "Premium-Reifen",
            "dealer" => 2,
            "manufacturer" => "Michelin",
            "price"=> 89.30,
            "streetLegality" => 1,
            "carId" => 4,
            "shortDescription" => "Dies sind Premium-Reifen",
            "category" => "Reifen",
            "serialNumber" => "155443345537",
            "preview"=> "prev1",
            "preview2" => "prev2",
            "preview3" => "prev3"
        ]));

        $expected = '401 Unauthorized';
        // Act
        $result = (string)$pc->createProduct($productToCreate);
        // Assert
        $this->assertStringContainsString($expected, $result);
        // Reset
        $this->artisan('migrate:rollback');
    }

    /**
     * Tests the deleteProduct function with a non-existing product id
     * @return void
     */
    public function test_deleteProduct_withNonExistingProductId_returns_404()
    {
        // Arrange
        $this->artisan('migrate');
        $this->artisan('db:seed');

        $pc = new ProductController;

        $expected = '404 Not Found';
        // Act
        $result = (string)$pc->deleteProduct(99);
        // Assert
        $this->assertStringContainsString($expected, $result);
        // Reset
        $this->artisan('migrate:rollback');
    }

    /**
     * Tests the deleteProduct function with an unauthorized user
     * @return void
     */
    public function test_deleteProduct_withUnauthorizedUser_returns_401()
    {
        // Arrange
        $this->artisan('migrate');
        $this->artisan('db:seed');

        $pc = new ProductController;

        $expected = '401 Unauthorized';
        // Act
        $result = (string)$pc->deleteProduct(1);
        // Assert
        $this->assertStringContainsString($expected, $result);
        // Reset
        $this->artisan('migrate:rollback');
    }
}
