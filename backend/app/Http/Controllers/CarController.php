<?php

namespace App\Http\Controllers;

use App\Http\Repositories\CarsRepository;
use App\Http\Repositories\WriteCarRepository;
use App\Http\Requests\AddCarRequest;
use App\Models\Car;

class CarController extends Controller
{
    /**
     * Get a list of cars
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(['cars' => CarsRepository::getAllCars()], 200);

    }

    /**
     * Save the new car
     *
     * @param AddCarRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(AddCarRequest $request)
    {
        $car = WriteCarRepository::storeCar($request->all());
        return response()->json(['car' => $car], 201);
    }

    /**
     * Show car by ID
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(int $id)
    {
        return response()->json(['car' => CarsRepository::getCarById($id)], 200);
    }

    /**
     * Update car
     *
     * @param AddCarRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(AddCarRequest $request)
    {
        $save = WriteCarRepository::updateCar($request);
        return response()->json($save, 200);
    }

    /**
     * Delete car by ID
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(int $id)
    {
        Car::destroy($id);
        return response()->json(['id' => $id], 200);
    }
}
